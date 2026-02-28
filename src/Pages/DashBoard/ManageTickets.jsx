import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageTickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tickets")
            .then(res => res.json())
            .then(data => setTickets(data));
    }, []);


    // const handleEdit = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonText: "Yes, delete it!",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:5000/edit-tickets/${id}`, {
    //                 method: "PUT"
    //             })
    //                 .then(res => res.json())
    //                 .then(() => {
    //                     Swal.fire("Deleted!", "Your request has been deleted.", "success");
    //                     setTickets(prev => prev.filter(ticket => ticket._id !== id));
    //                 });
    //         }
    //     });
    // };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete-tickets/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire("Deleted!", "Your request has been deleted.", "success");
                        setTickets(prev => prev.filter(ticket => ticket._id !== id));
                    });
            }
        });
    };
    return (
        <div className="w-full max-w-7xl mx-auto p-3 sm:px-6 py-6 overflow-x-hidden min-h-screen">

            <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
                <h2 className="text-xl text-orange-500 font-semibold">Manage Tickets</h2>

                <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Total: {tickets.length}
                </span>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block rounded-lg shadow overflow-x-auto">

                <table className="min-w-full table-auto">

                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="py-3 px-3 text-left">Bus</th>
                            <th className="py-3 px-3 text-left">Route</th>
                            <th className="py-3 px-3 text-left">Time</th>
                            <th className="py-3 px-3 text-left">Price</th>
                            <th className="py-3 px-3 text-left">Status</th>
                            <th className="py-3 px-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">

                        {tickets.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-10 text-gray-500">
                                    No tickets found
                                </td>
                            </tr>
                        ) : (

                            tickets.map(ticket => (

                                <tr
                                    key={ticket._id}
                                    className="hover:bg-gray-100 transition duration-200"
                                >

                                    {/* Bus */}
                                    <td className="py-4 px-3">
                                        <div className="font-semibold">
                                            {ticket.busName}
                                        </div>

                                        <div className="text-sm text-gray-500">
                                            Bus Number:  {ticket.busNumber}
                                        </div>
                                    </td>


                                    {/* Route */}
                                    <td className="py-4 px-3">

                                        <span className="font-medium">
                                            {ticket.from}
                                        </span>

                                        <span className="mx-2">
                                            →
                                        </span>

                                        <span className="font-medium">
                                            {ticket.to}
                                        </span>

                                    </td>


                                    {/* Time */}
                                    <td className="py-4 px-3">

                                        <div>
                                            {ticket.journeyDate}
                                        </div>

                                        <div className="text-sm text-blue-500">
                                            {ticket.departureTime}
                                        </div>

                                    </td>


                                    {/* Price */}
                                    <td className="py-4 px-3 font-semibold">

                                        ৳{ticket.price}

                                    </td>


                                    {/* Status */}
                                    <td className="py-4 px-3">

                                        <span className={`px-2 py-1 rounded-full text-sm font-semibold
                                        
                                        ${ticket.status === "active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }
                                        
                                        `}>

                                            {ticket.status || "active"}

                                        </span>

                                    </td>


                                    {/* Actions */}
                                    <td className="py-4 px-3 text-center">

                                        <div className="flex justify-center gap-3">

                                            <button
                                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
                                            >
                                                <FaEdit />
                                            </button>


                                            <button
                                                onClick={() => handleDelete(ticket._id)}
                                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white"
                                            >
                                                <FaTrashAlt />
                                            </button>

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

                {tickets.map(ticket => (

                    <div
                        key={ticket._id}
                        className=" shadow rounded-lg p-4 border w-full overflow-hidden"
                    >

                        <div className="flex justify-between mb-2">

                            <div>

                                <div className="font-semibold">
                                    {ticket.busName}
                                </div>

                                <div className="text-sm text-gray-500">
                                    Bus Number: {ticket.busNumber}
                                </div>

                            </div>

                            <span className={`px-3 py-1 rounded-full text-xs font-semibold
                            
                            ${ticket.status === "active"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                }
                            
                            `}>

                                {ticket.status || "active"}

                            </span>

                        </div>



                        <div className="text-sm mt-2">

                            <div>

                                <span className="font-medium">
                                    Route:
                                </span>

                                {" "}
                                {ticket.from} → {ticket.to}

                            </div>


                            <div className="mt-1">

                                <span className="font-medium">
                                    Date:
                                </span>

                                {" "}
                                {ticket.journeyDate}

                            </div>


                            <div>

                                <span className="font-medium">
                                    Time:
                                </span>

                                {" "}
                                {ticket.departureTime}

                            </div>


                            <div className="mt-1 font-semibold">

                                ৳{ticket.price}

                            </div>

                        </div>



                        <div className="flex gap-2 mt-3">

                            <button
                                className="btn btn-sm flex-1 text-blue-600"
                            >
                                Edit
                            </button>


                            <button
                                onClick={() => handleDelete(ticket._id)}
                                className="btn btn-sm flex-1 text-red-600"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default ManageTickets;