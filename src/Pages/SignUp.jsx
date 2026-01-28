import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import axios from 'axios';

const SignUp = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()
        // console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo
        const file = photo.files[0]

        // console.log({ name, photo, email, password });

        const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regExp.test(password)) {
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return;
        }


        const res = await axios.post(`https://api.imgbb.com/1/upload?key=70a9b49715646353c3c427acfc6b5b47`, { image: file },
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        const mainPhotoURL = res.data.data.display_url;

        const formData = {
            name,
            email,
            password,
            mainPhotoURL,
        }

        console.log(formData);

        if (res.data.success == true) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    // console.log(user);
                    updateUser({ displayName: name, photoURL: mainPhotoURL })
                        .then(() => {
                            setUser({ ...user, displayName: name, photoURL: mainPhotoURL })
                            navigate('/')
                            toast.success("SignUp Successful")
                            axios.post("http://localhost:5000/users", formData)
                                .then(res => {
                                    console.log(res.data)
                                })
                                .catch(error => {
                                    console.log(error);
                                })
                        })
                        .catch((error) => {
                            console.log(error);
                            setUser(user)
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode, errorMessage)
                });
        }
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl font-semibold text-center'>Sign Up your account</h2>
                <form onSubmit={handleSignup} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <div>
                            <label className="label">Name</label>
                            <input type="text"
                                name='name'
                                className="input"
                                placeholder="Name"
                                required />
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="label">Photo URl</label>
                            <input type="file"
                                name='photo'
                                className="input"
                                placeholder="Photo URl"
                                required />
                        </div>

                        {/* email */}
                        <div>
                            <label className="label">Email</label>
                            <input type="email"
                                name='email'
                                className="input"
                                placeholder="Email"
                                required />
                        </div>

                        {/* password */}
                        <div className="relative">
                            <label className="label">Password</label>
                            <input type={show ? "text" : "password"}
                                name='password'
                                className="input"
                                placeholder="Password"
                                required />
                            <span onClick={() => setShow(!show)} className="absolute right-7 top-8 cursor-pointer z-50">
                                {show ? <IoEyeOff className="h-4 w-4"></IoEyeOff> : <FaEye className="h-4 w-4"></FaEye>}
                            </span>
                        </div>

                        <button type='submit' className="btn  mt-4 bg-gradient-to-r from-green-600 to-green-800 text-white">Sign Up</button>

                        <p className='font-semibold pt-5 text-center'>Already Have An Account ?
                            <Link className='text-secondary' to='/login'> Login</Link></p>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignUp;