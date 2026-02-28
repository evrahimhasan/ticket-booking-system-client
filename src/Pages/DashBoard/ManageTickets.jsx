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
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Manage Tickets</h2>
                <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Total: {tickets.length} Tickets
                </span>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Bus Details</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Route</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Time & Date</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Price</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {tickets.map((ticket) => (
                                <tr key={ticket._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-800">{ticket.busName}</div>
                                        <div className="text-xs text-gray-400">{ticket.busNumber}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-700">
                                            <span className="font-medium">{ticket.from}</span>
                                            <span className="mx-2 text-gray-400">→</span>
                                            <span className="font-medium">{ticket.to}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        <div>{ticket.journeyDate}</div>
                                        <div className="text-xs text-blue-500 font-medium">{ticket.departureTime}</div>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-gray-800">
                                        ৳{ticket.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${ticket.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                            }`}>
                                            {ticket.status || 'Active'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center gap-3">
                                            {/* Edit Button */}
                                            <button
                                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                                                title="Edit Ticket"
                                            >
                                                <FaEdit size={16} />
                                            </button>
                                            {/* Delete Button */}
                                            <button
                                                onClick={() => handleDelete(ticket._id)}
                                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                                                title="Delete Ticket"
                                            >
                                                <FaTrashAlt size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Placeholder */}
                {tickets.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        No tickets found. Add some from the "Add Ticket" section.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageTickets;