import React, { useEffect, useState } from 'react';
import { FaSearch, FaUserCheck, FaUserSlash } from 'react-icons/fa';
import { RiMenuSearchLine } from 'react-icons/ri';

const AllUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUsers(data.user || []));
    }, []);
    // console.log(users);



    const handleStatusChange = (email, status) => {
        fetch(`http://localhost:5000/update/user/status?email=${email}&status=${status}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setUsers(users.map(user =>
                    user.email === email
                        ? { ...user, status: status }
                        : user
                ));
            });
    }

    return (
        <div className="w-full max-w-7xl mx-auto p-3 sm:px-6 py-6 overflow-x-hidden min-h-screen">

            <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
                <h2 className="text-xl text-orange-500 font-semibold">All User</h2>

                <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
                    Total: {users.length}
                </span>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block rounded-lg shadow overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="py-3 px-3 text-left">User</th>
                            <th className="py-3 px-3 text-left">Role</th>
                            <th className="py-3 px-3 text-left">Status</th>
                            <th className="py-3 px-3 text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center py-10 text-gray-500">
                                    No users found
                                </td>
                            </tr>
                        ) : (
                            users.map(user => (
                                <tr
                                    key={user._id}
                                    className="hover:bg-gray-100 hover:text-gray-900 transition duration-200"
                                >
                                    {/* User */}
                                    <td className="py-4 px-3">
                                        <div className="flex items-center gap-3">
                                            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-orange-400 flex-shrink-0">
                                                <img src={user.mainPhotoURL} alt={user.name} className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">{user.name}</div>
                                                <div className="text-sm text-gray-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Role */}
                                    <td className="py-4 px-3 capitalize font-medium">{user.role}</td>

                                    {/* Status */}
                                    <td className="py-4 px-3">
                                        <span className={`px-2 py-1 rounded-full text-sm font-semibold
                      ${user.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                            {user.status}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="py-4 px-3 text-center">
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="cursor-pointer">
                                                <RiMenuSearchLine size={22} />
                                            </label>
                                            <ul tabIndex={0} className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-44">
                                                {user.status === "active" ? (
                                                    <li>
                                                        <button onClick={() => handleStatusChange(user.email, "blocked")} className="text-red-500">Block User</button>
                                                    </li>
                                                ) : (
                                                    <li>
                                                        <button onClick={() => handleStatusChange(user.email, "active")} className="text-green-500">Unblock User</button>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* MOBILE CARD VIEW */}
            <div className="md:hidden space-y-4">
                {users.map(user => (
                    <div key={user._id} className="bg-white shadow rounded-lg p-4 border w-full overflow-hidden">

                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-orange-400 flex-shrink-0">
                                    <img src={user.mainPhotoURL} alt={user.name} className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-semibold">{user.name}</div>
                                    <div className="text-sm text-gray-500">{user.email}</div>
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold
                ${user.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {user.status}
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 mt-2 w-full">
                            <span className="font-medium capitalize">Role: {user.role}</span>

                            <div className="flex flex-wrap gap-2 mt-1">
                                {user.status === "active" ? (
                                    <button onClick={() => handleStatusChange(user.email, "blocked")} className="btn btn-sm flex-1 text-red-500">Block</button>
                                ) : (
                                    <button onClick={() => handleStatusChange(user.email, "active")} className="btn btn-sm flex-1 text-green-500">Unblock</button>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllUser;