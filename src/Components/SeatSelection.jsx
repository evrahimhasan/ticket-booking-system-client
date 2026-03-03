import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdEventSeat } from 'react-icons/md';
import { useParams, useNavigate } from 'react-router';
import { FaChevronRight, FaInfoCircle } from 'react-icons/fa';

const SeatSelection = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ticket, setTicket] = useState(null);
    const [seats, setSeats] = useState([]);
    const [selectedSeatIds, setSelectedSeatIds] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tickets/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("Seats Data:", data.seats);  // 👈 এটা দেখো
                setTicket(data);
                setSeats(data.seats || []);
            });
    }, [id]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/tickets/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setTicket(data);
    //             // const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    //             // const mockSeats = rows.flatMap(row =>
    //             //     [1, 2, 3, 4].map(num => ({
    //             //         id: `${row}${num}`,
    //             //         status: Math.random() > 0.8 ? 'BOOKED' : 'AVAILABLE' // 20% random booked for realism
    //             //     }))
    //             // );
    //             setSeats(data.seats || []);
    //         })
    //         .catch(err => console.log(err));
    // }, [id]);

    const toggleSeat = (seatId) => {
        setSelectedSeatIds(prev =>
            prev.includes(seatId)
                ? prev.filter(id => id !== seatId)
                : prev.length < 4 ? [...prev, seatId] : prev // Limit to 4 seats
        );
    };

    if (!ticket) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
        </div>
    );

    const seatFarePerSeat = ticket.price || 900;
    const selectedCount = selectedSeatIds.length;
    const totalFare = selectedCount * seatFarePerSeat;
    const serviceCharge = selectedCount > 0 ? 50 : 0;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-12 px-4 transition-colors">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="mb-10 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-4">
                    <div>
                        <span className="text-orange-500 font-black uppercase tracking-widest text-xs">Seat Selection</span>
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase italic leading-tight">
                            {ticket.busName} <span className="text-orange-500">Express</span>
                        </h2>
                        <p className="text-slate-500 font-medium mt-1">{ticket.from} — {ticket.to}</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
                            <div className="w-4 h-4 rounded bg-slate-200" /> Available
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
                            <div className="w-4 h-4 rounded bg-orange-500" /> Selected
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
                            <div className="w-4 h-4 rounded bg-slate-400" /> Booked
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* BUS CABIN VIEW */}
                    <div className="w-full lg:flex-1 bg-white dark:bg-zinc-900 p-8 rounded-[3rem] border border-slate-200 dark:border-zinc-800 shadow-xl relative overflow-hidden">

                        {/* Driver & Front Bar */}
                        <div className="flex justify-between items-center mb-12 pb-6 border-b border-dashed border-slate-200 dark:border-zinc-800">
                            <div className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Front Gate</div>
                            <div className="flex items-center gap-3 bg-slate-100 dark:bg-zinc-800 px-6 py-3 rounded-2xl">
                                <span className="text-sm font-black uppercase italic text-slate-600 dark:text-zinc-400 tracking-tighter">Pilot</span>
                                <GiSteeringWheel className="text-3xl text-orange-500 animate-pulse" />
                            </div>
                        </div>

                        {/* Seat Layout Container */}
                        <div className="max-w-md mx-auto space-y-4">
                            {Array.from({ length: Math.ceil(seats.length / 4) }).map((_, rowIndex) => {
                                const rowSeats = seats.slice(rowIndex * 4, rowIndex * 4 + 4);
                                return (
                                    <div key={rowIndex} className="grid grid-cols-5 items-center">
                                        {/* Left Side (2 Seats) */}
                                        <div className="col-span-2 flex gap-3">
                                            {rowSeats.slice(0, 2).map(seat => (
                                                <SeatButton
                                                    key={seat.seatNo}
                                                    seat={seat}   // ✅ এটা add করো
                                                    isSelected={selectedSeatIds.includes(seat.seatNo)}
                                                    onClick={() => toggleSeat(seat.seatNo)}
                                                />
                                            ))}
                                        </div>

                                        {/* Aisle (Way) */}
                                        <div className="col-span-1 flex justify-center text-[10px] font-black text-slate-200 dark:text-zinc-800 uppercase tracking-widest rotate-90">Way</div>

                                        {/* Right Side (2 Seats) */}
                                        <div className="col-span-2 flex gap-3">
                                            {rowSeats.slice(2, 4).map(seat => (
                                                <SeatButton
                                                    key={seat.seatNo}
                                                    seat={seat}
                                                    isSelected={selectedSeatIds.includes(seat.seatNo)}
                                                    onClick={() => toggleSeat(seat.seatNo)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* SIDEBAR SUMMARY */}
                    <div className="w-full lg:w-[380px] space-y-6 sticky top-10">
                        <div className="bg-zinc-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />

                            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-2">
                                Booking <span className="text-orange-500">Summary</span>
                            </h3>

                            <div className="space-y-4 border-b border-zinc-800 pb-6 mb-6 text-sm font-medium">
                                <div className="flex justify-between items-center text-zinc-400">
                                    <span>Selected Seats ({selectedCount})</span>
                                    <span className="text-white font-black tracking-widest">{selectedSeatIds.join(", ") || "None"}</span>
                                </div>
                                <div className="flex justify-between items-center text-zinc-400">
                                    <span>Base Fare</span>
                                    <span className="text-white">৳ {totalFare}</span>
                                </div>
                                <div className="flex justify-between items-center text-zinc-400">
                                    <span>Service Fee</span>
                                    <span className="text-white">৳ {serviceCharge}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xs font-black uppercase tracking-widest text-orange-500">Total Payable</span>
                                <span className="text-3xl font-black italic tracking-tighter text-white">
                                    ৳ {totalFare + serviceCharge}
                                </span>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={selectedCount === 0}
                                className="w-full py-5 bg-orange-500 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:shadow-none transition-all uppercase italic tracking-[0.2em] text-xs flex items-center justify-center gap-2"
                            >
                                Proceed to Payment <FaChevronRight />
                            </motion.button>

                            <p className="mt-6 flex items-start gap-2 text-[10px] text-zinc-500 leading-relaxed font-medium">
                                <FaInfoCircle className="mt-0.5" />
                                Maximum 4 seats can be booked per transaction. Tickets are subject to availability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable Seat Component
const SeatButton = ({ seat, isSelected, onClick }) => {
    const isBooked = seat.status === 'BOOKED';
    return (
        <motion.button
            whileHover={!isBooked ? { y: -3 } : {}}
            onClick={onClick}
            disabled={isBooked}
            className={`relative flex flex-col items-center group ${isBooked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
            <MdEventSeat className={`text-5xl transition-colors duration-300 ${isSelected ? 'text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]' :
                isBooked ? 'text-slate-200 dark:text-zinc-800' :
                    'text-slate-300 dark:text-zinc-700 hover:text-orange-400'
                }`} />
            <span className={`text-[10px] font-black mt-1 ${isSelected ? 'text-orange-500' :
                isBooked ? 'text-slate-300 dark:text-zinc-800' :
                    'text-slate-400 dark:text-zinc-600'
                }`}>
                {seat.seatNo}
            </span>
            {isBooked && <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-slate-400/30 rotate-45 rounded-full" />}
        </motion.button>
    );
};

export default SeatSelection;