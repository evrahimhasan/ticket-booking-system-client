import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Ticket = () => {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tickets")
            .then(res => res.json())
            .then(data => setTickets(data));
    }, []);

    // console.log(tickets);

    return (
        <div className="space-y-6">
            {tickets.map((ticket) => (
                <div key={ticket._id} className="max-w-5xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row items-stretch p-4 gap-4">

                    {/* 1. Left Section: Bus Name & Type */}
                    <div className="flex-1 border-r-0 md:border-r border-gray-100 pr-4">
                        <h2 className="text-xl font-bold text-gray-800">{ticket.busName}</h2>
                        <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                           Bus Number: {ticket.busNumber}
                        </p>

                        <div className="mt-3 flex items-center gap-2">
                            <span className="px-2 py-1 border border-gray-300 rounded text-[10px] font-bold text-gray-500 flex items-center gap-1">
                                <span className="opacity-50">❄️</span> {ticket.busType === 'AC' ? 'AC' : 'NON AC'}
                            </span>
                        </div>

                        <button className="mt-6 text-red-500 italic text-xs hover:underline">
                            Cancellation policy
                        </button>
                    </div>

                    {/* 2. Middle Section: Timing & Seats */}
                    <div className="flex-[2] flex flex-col justify-center px-4 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
                        <div className="flex justify-between items-start border-b border-gray-100 pb-4 mb-4">
                            <div className="text-left">
                                <p className="text-[10px] text-gray-400 uppercase">Starting</p>
                                <p className="text-xl font-bold text-gray-800">{ticket.departureTime}</p>
                                <p className="text-xs text-gray-500 italic">{ticket.from || "Abdullahpur"}</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-[2px] bg-gray-300 mt-6">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-1 text-gray-400 text-lg">
                                        <img src={ticket.mainPhotoURL} alt="" />
                                    </span>
                                </div>
                                <p className="text-[11px] mt-2">
                                    <span className="text-gray-400">Seats Left: </span>
                                    <span className="text-red-500 font-bold">{ticket.seatsLeft || ticket.totalSeats}</span>
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-[10px] text-gray-400 opacity-0 uppercase">Arrival</p> {/* Alignment spacer */}
                                <p className="text-xl font-bold text-gray-800">{ticket.arrivalTime}</p>
                                <p className="text-xs text-gray-500 italic">{ticket.to || "Teknaf"}</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Right Section: Price & Action */}
                    <div className="flex-1 flex flex-col items-center md:items-end justify-between min-w-[150px]">
                        <div className="text-right">
                            <div className="inline-block border border-green-500 text-green-500 text-[10px] px-2 py-0.5 rounded mb-2 font-medium">
                                No Extra Charge
                            </div>
                            <div className="flex items-center justify-end text-red-500 font-bold text-2xl">
                                <span className="text-xl mr-0.5">৳</span>
                                {ticket.price}
                            </div>
                        </div>

                        <Link
                            to='/seat-selection'
                            className="w-full mt-4 bg-[#D31317] hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-md transition-colors text-sm">
                            View Seats
                        </Link>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Ticket;