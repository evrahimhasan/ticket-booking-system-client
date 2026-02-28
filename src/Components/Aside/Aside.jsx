import React, { use, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { AiFillDashboard, AiFillHome, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router';
import { MdDirectionsBus, MdOutlinePublishedWithChanges } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

const Aside = () => {
    const { logOut } = use(AuthContext)
    const [open, setOpen] = useState(false);

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
        <div className="flex min-h-screen bg-gray-100">

            <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-4 text-2xl fixed top-4 left-4 z-50 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition"
            >
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            {/* ASIDE AREA */}
            <aside
                className={`fixed lg:static top-0 z-30 left-0 h-full w-64 bg-orange-600 text-white p-6 flex flex-col justify-between transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                <div>
                    {/* LOGO / TITLE */}
                    <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-md">
                        <div className="flex items-center gap-2 mb-3">
                            <MdDirectionsBus className="text-3xl text-yellow-400" />
                            <h2 className="text-2xl text-orange-900 font-bold tracking-wide">BusAura</h2>
                        </div>
                        DashBoard
                    </h2>

                    {/* NAVIGATION */}
                    <nav className="flex-1 flex flex-col gap-3">

                        <NavLink
                            to="/"
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-700 ${isActive ? "bg-indigo-600" : ""
                                }`
                            }
                        >
                            <AiFillHome size={20} />
                            <span>Home</span>
                        </NavLink>

                        <NavLink
                            to="/dashboard"
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                    ? "bg-white text-orange-600 font-semibold shadow-md"
                                    : "hover:bg-orange-500 hover:bg-opacity-80"
                                }`
                            }
                        >
                            <AiFillDashboard className="h-5 w-5" /> Dashboard
                        </NavLink>

                        <NavLink
                            to="/dashboard/add-ticket"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                    ? "bg-white text-orange-600 font-semibold shadow-md"
                                    : "hover:bg-orange-500 hover:bg-opacity-80"
                                }`
                            }
                        >
                            <MdOutlinePublishedWithChanges className="h-5 w-5" /> Add Ticket
                        </NavLink>


                        <NavLink
                            to="/dashboard/manage-ticket"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                    ? "bg-white text-orange-600 font-semibold shadow-md"
                                    : "hover:bg-orange-500 hover:bg-opacity-80"
                                }`
                            }
                        >
                            <MdOutlinePublishedWithChanges className="h-5 w-5" /> Manage Ticket
                        </NavLink>

                        

                        <NavLink
                            to="/dashboard/all-user"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                    ? "bg-white text-orange-600 font-semibold shadow-md"
                                    : "hover:bg-orange-500 hover:bg-opacity-80"
                                }`
                            }
                        >
                            <MdOutlinePublishedWithChanges className="h-5 w-5" /> All Users
                        </NavLink>


                        <NavLink
                            to="/dashboard/myprofile"
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                    ? "bg-white text-orange-600 font-semibold shadow-md"
                                    : "hover:bg-orange-500 hover:bg-opacity-80"
                                }`
                            }
                        >
                            <MdOutlinePublishedWithChanges className="h-5 w-5" /> My Profile
                        </NavLink>
                    </nav>
                </div>

                {/* LOGOUT BUTTON */}
                <div className="p-4 border-t border-orange-400">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-orange-600 bg-white hover:bg-orange-50 transition shadow-sm"
                    >
                        <FiLogOut className="h-5 w-5" /> Logout
                    </button>
                </div>
            </aside>
        </div>

    );
};

export default Aside;