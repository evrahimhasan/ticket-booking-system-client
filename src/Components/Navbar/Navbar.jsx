import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
import { MdDirectionsBus } from 'react-icons/md';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }


    const handleLogout = () => {
        // console.log('user try to logout');
        logOut()
            .then(() => {
                toast.success('Logged out successfully')
            })
            .catch((error) => {
                console.log(error);
            });

    }
    return (
        <div className="flex flex-col gap-3 md:flex-row justify-between items-center">
            {/* <div className=''>{user && user.email}</div> */}
            <div className="flex items-center gap-2 mb-3">
                <MdDirectionsBus className="text-3xl text-yellow-400" />
                <h2 className="text-2xl text-orange-900 font-bold tracking-wide">BusAura</h2>
            </div>
            <div className="nav flex flex-col md:flex-row gap-5 items-center">
                <NavLink to="/" className={({ isActive }) => isActive ?
                    "text-orange-700 underline" : ""}>Home</NavLink>
                <NavLink to="/pets" className={({ isActive }) => isActive ?
                    "text-orange-700 underline" : ""}>Search</NavLink>
                <NavLink to="/pets" className={({ isActive }) => isActive ?
                    "text-orange-700 underline" : ""}>Offer</NavLink>
                {
                    user && (
                        <>
                            <NavLink to="my-listings" className={({ isActive }) => isActive ?
                                "text-orange-700 underline" : ""}>My Tickets</NavLink>
                        </>
                    )
                }

            </div>

            <div className='flex justify-center items-center gap-4'>
                {
                    user ? (
                        <div className="dropdown dropdown-end">

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User Avatar"
                                        src={user.photoURL || 'https://img.icons8.com/?size=64&id=115318&format=png'}
                                    />
                                </div>
                            </div>



                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <span className="font-semibold">
                                        {user.displayName || user.email}
                                    </span>
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        <Link to='/myprofile'>Update Profile</Link>
                                    </span>
                                </li>
                                <li>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">
                                            Dark
                                        </span>
                                        <input
                                            onChange={(e) => handleTheme(e.target.checked)}
                                            type="checkbox"
                                            defaultChecked={localStorage.getItem('theme') === "dark"}
                                            className="toggle"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>

                        </div>
                    ) : (
                        <div className='flex gap-3'>
                            <div className="login-btn">
                                <Link to='/login' className="btn btn-primary px-10 ">Login</Link>
                            </div>
                            <div className="login-btn">
                                <Link to='/signup' className="btn btn-primary px-10 ">Sign Up</Link>
                            </div>
                        </div>
                    )
                }


            </div>

        </div>
    );
};

export default Navbar;