import React, { use, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { IoEyeOff } from 'react-icons/io5';
import { FaEye, FaBus, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Login = () => {
    const { signIn, googleSignIn } = use(AuthContext);
    const [show, setShow] = useState(false);
    const emailRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                toast.success('Welcome Back to BusAura!');
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                toast.error('Invalid credentials. Please try again.');
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                toast.success('Google Login Successful!');
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                toast.error('Google Sign-in failed.');
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950/80 to-orange-900/20 z-1" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md px-6"
            >
                {/* Logo & Branding */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/20 mb-4 rotate-3 group">
                        <FaBus className="text-white text-3xl group-hover:scale-110 transition-transform" />
                    </div>
                    <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase">
                        Bus<span className="text-orange-500">Aura</span>
                    </h1>
                    <p className="text-zinc-400 text-xs font-bold uppercase tracking-[0.3em] mt-2">Start Your Journey</p>
                </div>

                {/* Login Card */}
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <h2 className="text-2xl font-black text-white italic mb-8 uppercase tracking-tighter">Login Account</h2>

                    <form onSubmit={handleLogin} className="space-y-5">
                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="passenger@busaura.com"
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-zinc-600"
                                ref={emailRef}
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2 relative">
                            <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Secure Password</label>
                            <div className="relative">
                                <input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-zinc-600"
                                    required
                                />
                                <span
                                    onClick={() => setShow(!show)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-500 hover:text-orange-500 transition-colors"
                                >
                                    {show ? <IoEyeOff size={20} /> : <FaEye size={20} />}
                                </span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-orange-500/20 uppercase italic tracking-widest text-sm flex items-center justify-center gap-3 transition-all mt-4"
                        >
                            Boarding Now <FaArrowRight className="text-xs" />
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                        <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest text-zinc-500"><span className="bg-transparent px-4 backdrop-blur-xl">Or Continue With</span></div>
                    </div>

                    {/* Google Sign In */}
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="w-full bg-white text-zinc-900 font-black py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all uppercase italic tracking-widest text-xs shadow-lg"
                    >
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="google" />
                        Google Login
                    </button>

                    {/* Footer Link */}
                    <p className="text-center mt-8 text-xs font-bold text-zinc-500 uppercase tracking-wider">
                        New Traveler?
                        <Link to="/signup" className="text-orange-500 hover:underline ml-2 italic">Create Account</Link>
                    </p>
                </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
    );
};

export default Login;