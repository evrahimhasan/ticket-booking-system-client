import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaBus, FaArrowRight, FaUserAlt, FaCamera } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { motion } from 'framer-motion';
import axios from 'axios';

const SignUp = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const file = form.photo.files[0];

        const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regExp.test(password)) {
            toast.error("Password must contain Uppercase, Lowercase & 6+ characters.");
            setLoading(false);
            return;
        }

        try {
            // Image Upload to ImgBB
            const res = await axios.post(`https://api.imgbb.com/1/upload?key=70a9b49715646353c3c427acfc6b5b47`,
                { image: file },
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            const mainPhotoURL = res.data.data.display_url;
            const formData = { name, email, mainPhotoURL };

            // Firebase Create User
            const result = await createUser(email, password);
            const user = result.user;

            // Update Profile
            await updateUser({ displayName: name, photoURL: mainPhotoURL });

            // Save to DB & Context
            setUser({ ...user, displayName: name, photoURL: mainPhotoURL });
            await axios.post("https://ticket-booking-system-server.vercel.app/users", formData);

            toast.success("Welcome Aboard! Registration Successful.");
            navigate('/');
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950 py-20 px-6">
            {/* Background Elements */}
            <div
                className="absolute inset-0 z-0 opacity-30 grayscale"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2000&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-950/90 to-orange-900/30 z-1" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 w-full max-w-lg"
            >
                {/* Branding */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500 rounded-2xl shadow-lg mb-4 -rotate-3">
                        <FaBus className="text-white text-2xl" />
                    </div>
                    <h1 className="text-3xl font-black text-white italic tracking-tighter uppercase">
                        Join Bus<span className="text-orange-500">Aura</span>
                    </h1>
                    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] mt-1">Create Your Passenger ID</p>
                </div>

                {/* SignUp Card */}
                <div className="bg-white/5 backdrop-blur-2xl p-8 md:p-10 rounded-[3rem] border border-white/10 shadow-2xl">
                    <form onSubmit={handleSignup} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Name Input */}
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative">
                                <FaUserAlt className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-600 text-sm" />
                                <input type="text" name="name" placeholder="John Doe" className="signup-input pl-12" required />
                            </div>
                        </div>

                        {/* Photo Upload - Special Design */}
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Profile Photo</label>
                            <div className="relative group">
                                <input
                                    type="file"
                                    name="photo"
                                    accept="image/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    required
                                />
                                <div className="w-full bg-zinc-900/50 border border-dashed border-white/20 rounded-2xl py-4 px-6 flex items-center justify-center gap-3 group-hover:border-orange-500/50 transition-all">
                                    <FaCamera className="text-zinc-500 group-hover:text-orange-500" />
                                    <span className="text-xs font-bold text-zinc-500 group-hover:text-zinc-300">Choose your avatar</span>
                                </div>
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Email Address</label>
                            <input type="email" name="email" placeholder="email@example.com" className="signup-input" required />
                        </div>

                        {/* Password Input */}
                        <div className="md:col-span-2 space-y-1.5 relative">
                            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Password</label>
                            <div className="relative">
                                <input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    className="signup-input"
                                    required
                                />
                                <span onClick={() => setShow(!show)} className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-500 hover:text-orange-500">
                                    {show ? <IoEyeOff size={18} /> : <FaEye size={18} />}
                                </span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className="md:col-span-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-orange-500/20 uppercase italic tracking-widest text-xs flex items-center justify-center gap-3 transition-all mt-4 disabled:bg-zinc-800"
                        >
                            {loading ? "Registering..." : "Create Account"} <FaArrowRight className="text-[10px]" />
                        </motion.button>
                    </form>

                    <p className="text-center mt-8 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                        Already have a ticket?
                        <Link to="/login" className="text-orange-500 hover:underline ml-2 italic">Login Here</Link>
                    </p>
                </div>
            </motion.div>

            {/* Custom Styles for Inputs */}
            <style jsx>{`
                .signup-input {
                    width: 100%;
                    background: rgba(24, 24, 27, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    padding: 1rem 1.5rem;
                    color: white;
                    font-size: 0.875rem;
                    transition: all 0.3s;
                }
                .signup-input:focus {
                    outline: none;
                    border-color: rgba(249, 115, 22, 0.5);
                    background: rgba(24, 24, 27, 0.8);
                }
            `}</style>
        </div>
    );
};

export default SignUp;