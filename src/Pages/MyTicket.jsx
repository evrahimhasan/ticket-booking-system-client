import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { motion } from 'framer-motion';
import { FaTicketAlt, FaBus, FaCalendarAlt, FaChair, FaQrcode } from 'react-icons/fa';
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";

const MyTicket = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

    useEffect(() => {
        if (!userEmail) return;
        fetch(`https://ticket-booking-system-server.vercel.app/my-bookings/${userEmail}`)
            .then(res => res.json())
            .then(data => setBookings(data))
            .catch(err => console.error(err));
    }, [userEmail]);

    const downloadPDF = (booking) => {
        const doc = new jsPDF();

        // Title
        doc.setFontSize(18);
        doc.text("Bus Ticket", 14, 20);

        // Ticket Info
        doc.setFontSize(12);
        doc.text(`Ticket ID: ${booking.ticketId}`, 14, 30);
        doc.text(`User Email: ${booking.userEmail}`, 14, 38);
        doc.text(`Booking Date: ${new Date(booking.bookingDate).toLocaleString()}`, 14, 46);
        doc.text(`Total Paid: ৳${booking.totalAmount}`, 14, 54);

        // Seats Table
        autoTable(doc, {
            startY: 65,
            head: [["Seat Number"]],
            body: booking.selectedSeats.map((seat) => [seat]),
        });

        doc.save(`Ticket-${booking.ticketId}.pdf`);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-16 px-6 transition-colors duration-500">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <div className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2 uppercase italic tracking-tighter"
                    >
                        My <span className="text-orange-500">Tickets</span>
                    </motion.h1>
                </div>

                {bookings.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-zinc-900 p-12 rounded-[2.5rem] text-center border 
                        border-dashed border-slate-200 dark:border-zinc-800"
                    >
                        <div className="h-20 w-20 bg-slate-100 dark:bg-zinc-800 rounded-full flex 
                        items-center justify-center mx-auto mb-6 text-slate-400 text-3xl">
                            <FaTicketAlt />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                            No Bookings Yet</h3>
                        <p className="text-slate-500 dark:text-zinc-500 mb-8 font-medium">
                            You haven't booked any bus tickets through BusAura yet.</p>
                        <button className="px-8 py-4 bg-orange-500 text-white font-black rounded-2xl shadow-lg shadow-orange-500/20 uppercase italic tracking-widest text-xs">
                            Find Tickets Now
                        </button>
                    </motion.div>
                ) : (
                    <div className="grid gap-8">
                        {bookings.map((booking, index) => (
                            <motion.div
                                key={booking._id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-slate-100 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-2xl hover:border-orange-500/30 transition-all duration-500"
                            >
                                {/* Ticket Notch Effect */}
                                <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-50 dark:bg-zinc-950 rounded-full z-10 border-r border-slate-100 dark:border-zinc-800 shadow-inner" />
                                <div className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-50 dark:bg-zinc-950 rounded-full z-10 border-l border-slate-100 dark:border-zinc-800 shadow-inner" />

                                <div className="flex flex-col md:flex-row">
                                    {/* Left: Journey Info */}
                                    <div className="flex-1 p-8 md:p-10 border-b md:border-b-0 md:border-r 
                                    border-dashed border-slate-200 dark:border-zinc-800">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="flex items-center gap-3 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full">
                                                <FaBus className="text-sm" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Confirmed Ticket</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID: {booking.ticketId}</span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                                    <FaChair className="text-orange-500" /> Selected Seats
                                                </p>
                                                <h4 className="text-xl font-black text-slate-800 
                                                dark:text-white tracking-tighter italic">
                                                    {Array.isArray(booking.selectedSeats) ? booking.selectedSeats.join(", ") : "N/A"}
                                                </h4>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                                    <FaCalendarAlt className="text-orange-500" /> Booked On
                                                </p>
                                                <h4 className="text-sm font-bold text-slate-700 dark:text-zinc-300">
                                                    {booking.bookingDate ? new Date(booking.bookingDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : "N/A"}
                                                </h4>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-zinc-800 flex justify-between items-end">
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Amount Paid</p>
                                                <p className="text-3xl font-black italic text-slate-900 dark:text-white tracking-tighter">
                                                    <span className="text-orange-500">৳</span> {booking.totalAmount ?? "0"}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => downloadPDF(booking)}
                                                className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] hover:text-zinc-900 transition-colors">
                                                Download PDF
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right: QR Code Placeholder */}
                                    <div className="md:w-64 bg-slate-50/50 dark:bg-zinc-900/50 p-10 flex flex-col items-center justify-center relative">
                                        <div className="w-32 h-32 bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                                            <FaQrcode className="w-full h-full text-slate-800 dark:text-zinc-300 opacity-80" />
                                        </div>
                                        <p className="mt-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center leading-relaxed">
                                            Scan at counter for <br /> Boarding Pass
                                        </p>

                                        {/* Status Tag */}
                                        <div className="absolute top-0 right-0 bg-green-500 text-white px-6 py-1 rounded-bl-2xl text-[10px] font-black uppercase tracking-[0.2em] italic">
                                            Paid
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyTicket;