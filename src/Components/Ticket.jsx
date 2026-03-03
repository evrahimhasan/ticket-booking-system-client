import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import { FaBus, FaSnowflake, FaClock, FaChair, FaChevronRight } from 'react-icons/fa';

const Ticket = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);

    const from = params.get("from");
    const to = params.get("to");
    const date = params.get("date");

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tickets?from=${from || ""}&to=${to || ""}&date=${date || ""}`)
            .then(res => res.json())
            .then(data => setTickets(data))
    }, [location.search]);

    return (
        <div className="container mx-auto px-4 py-10 space-y-8">
            {tickets.map((ticket, index) => (
                <motion.div
                    key={ticket._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="max-w-5xl mx-auto group"
                >
                    <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-orange-500/30 transition-all duration-500 flex flex-col lg:flex-row overflow-hidden relative">

                        {/* 1. Left Section: Operator Info */}
                        <div className="lg:w-1/4 p-8 bg-slate-50/50 dark:bg-zinc-900/50 border-r border-dashed border-slate-200 dark:border-zinc-800 relative">
                            {/* Decorative Ticket Notch */}
                            <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-zinc-950 rounded-full border border-slate-100 dark:border-zinc-800 z-10" />

                            <div className="space-y-4">
                                <div className="h-12 w-12 bg-orange-100 dark:bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 text-xl">
                                    <FaBus />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">
                                        {ticket.busName}
                                    </h2>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
                                        ID: {ticket.busNumber}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 ${ticket.busType === 'AC' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                                        <FaSnowflake className={ticket.busType === 'AC' ? 'animate-spin-slow' : 'opacity-30'} />
                                        {ticket.busType === 'AC' ? 'Premium AC' : 'Non AC'}
                                    </span>
                                </div>
                                <button className="text-orange-500 text-[10px] font-bold uppercase tracking-widest hover:underline pt-2">
                                    Policy
                                </button>
                            </div>
                        </div>

                        {/* 2. Middle Section: Journey Details */}
                        <div className="flex-1 p-8 flex flex-col justify-center">
                            <div className="flex justify-between items-center relative">
                                {/* Journey Path Line */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 border-t-2 border-dashed border-slate-100 dark:border-zinc-800 hidden md:block" />

                                <div className="text-left z-10 bg-white dark:bg-zinc-900 pr-4">
                                    <p className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                                        <FaClock className="text-orange-500" /> Departure
                                    </p>
                                    <h3 className="text-3xl font-black text-slate-800 dark:text-white leading-none">
                                        {ticket.departureTime}
                                    </h3>
                                    <p className="text-sm font-bold text-slate-500 italic mt-2">{ticket.from || "Dhaka"}</p>
                                </div>

                                <div className="hidden md:flex flex-col items-center z-10 bg-white dark:bg-zinc-900 px-4">
                                    <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:rotate-12 transition-transform">
                                        <FaChevronRight />
                                    </div>
                                    <div className="mt-4 flex items-center gap-1.5 text-slate-400">
                                        <FaChair className="text-xs" />
                                        <span className="text-[11px] font-bold uppercase tracking-tighter">
                                            {ticket.seatsLeft || ticket.totalSeats} Seats
                                        </span>
                                    </div>
                                </div>

                                <div className="text-right z-10 bg-white dark:bg-zinc-900 pl-4">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Arrival</p>
                                    <h3 className="text-3xl font-black text-slate-800 dark:text-white leading-none">
                                        {ticket.arrivalTime}
                                    </h3>
                                    <p className="text-sm font-bold text-slate-500 italic mt-2">{ticket.to || "Destination"}</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Right Section: Pricing & Action */}
                        <div className="lg:w-1/4 p-8 bg-slate-50/50 dark:bg-zinc-900/50 border-l border-dashed border-slate-200 dark:border-zinc-800 flex flex-col justify-between items-center lg:items-end">
                            {/* Decorative Ticket Notch */}
                            <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-zinc-950 rounded-full border border-slate-100 dark:border-zinc-800 z-10" />

                            <div className="text-center lg:text-right">
                                <span className="bg-green-100 dark:bg-green-500/10 text-green-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                                    No Extra Fees
                                </span>
                                <div className="mt-4 flex items-baseline justify-center lg:justify-end gap-1">
                                    <span className="text-lg font-bold text-orange-500 italic">৳</span>
                                    <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
                                        {ticket.price}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate(`/seat/${ticket._id}`)}
                                className="w-full mt-6 bg-orange-500 hover:bg-zinc-900 text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 uppercase italic tracking-widest text-xs"
                            >
                                Select Seat <FaChevronRight className="text-[10px]" />
                            </button>
                        </div>

                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Ticket;