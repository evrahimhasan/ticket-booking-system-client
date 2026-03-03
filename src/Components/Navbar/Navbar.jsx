import React, { use, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
import { MdDarkMode, MdDirectionsBus, MdLightMode } from 'react-icons/md';

const Navbar = () => {
    const { user, logOut, role } = use(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
    const [isOpen, setIsOpen] = useState(false);

     const location = useLocation();
    const isHome = location.pathname === "/";

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

    const navClass = ({ isActive }) =>
        `text-sm font-semibold transition-colors duration-300 hover:text-orange-500 ${isActive ? "text-orange-600 border-b-2 border-orange-600 pb-1" : "text-gray-600 dark:text-gray-300"
        }`;
    return (
        <nav className={`
            ${isHome
                ? "fixed top-0 left-0 z-[100] w-full bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg"
                : "sticky top-0 z-[100] w-full bg-base-100 dark:bg-gray-950"
            }
            border-b border-gray-100/20 dark:border-gray-800/50
            transition-all duration-300
            `}>
            <div className="container mx-auto py-3">
                <div className="flex justify-between items-center h-16 md:h-20">

                    {/* Logo Section */}
                    <Link to='/' className="flex items-center gap-2 group shrink-0">
                        <div className="p-1.5 md:p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg group-hover:rotate-12 transition-transform">
                            <MdDirectionsBus className="text-2xl md:text-3xl text-orange-600" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-black tracking-tighter 
                        text-gray-900 dark:text-white">
                            Bus<span className="text-orange-600">Aura</span>
                        </h2>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-6 items-center">
                        <NavLink to="/" className={navClass}>Home</NavLink>
                        <NavLink to="/tickets" className={navClass}>Ticket</NavLink>
                        <NavLink to="/about-us" className={navClass}>About Us</NavLink>
                        <NavLink to="/my-tickets" className={navClass}>My Ticket</NavLink>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3 md:gap-6">
                        <div className="sm:flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-1.5 rounded-full px-3">
                            <input
                                type="checkbox"
                                checked={theme === "dark"}
                                onChange={(e) => handleTheme(e.target.checked)}
                                className="toggle toggle-xs md:toggle-sm [--tglbg:white] checked:[--tglbg:orange] bg-gray-300 border-none"
                            />
                        </div>

                        {user ? (
                            <div className="flex items-center gap-2 md:gap-4">
                                {role === 'admin' && (
                                    <Link to="/dashboard" className="hidden sm:block px-4 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs md:text-sm shadow-lg">Dashboard</Link>
                                )}
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-orange-500/20 w-8 h-8 md:w-10 md:h-10">
                                        <div className="w-full rounded-full">
                                            <img src={user.photoURL || "https://img.icons8.com/?size=100&id=kDoeg9H9caV1&format=png"} alt="User" />
                                        </div>
                                    </div>
                                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 dark:bg-gray-900 rounded-2xl w-52 border border-gray-100 dark:border-gray-800">
                                        <li className="px-4 py-2 font-bold text-orange-600 break-all">{user.displayName || user.email}</li>
                                        <li><button onClick={handleLogout} className="text-red-500">Logout</button></li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className="hidden sm:flex gap-2">
                                <Link to="/login" className="px-4 py-2 rounded-lg border border-orange-600 text-orange-600 font-bold text-sm">Login</Link>
                            </div>
                        )}

                        <button className="lg:hidden text-2xl text-orange-600" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[400px] border-t bg-white dark:bg-gray-950 shadow-xl" : "max-h-0"}`}>
                <div className="p-6 flex flex-col gap-4 text-center">
                    <NavLink to="/" className={navClass}>Home</NavLink>
                    <NavLink to="/tickets" className={navClass}>Ticket</NavLink>
                    <NavLink to="/about-us" className={navClass}>About Us</NavLink>
                    {!user && <Link to="/login" className="btn bg-orange-600 text-white border-none">Login</Link>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;