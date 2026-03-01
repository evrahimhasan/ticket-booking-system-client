import React, { useEffect, useState } from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdEventSeat } from 'react-icons/md';
import { useParams } from 'react-router';

const SeatSelection = () => {
    const { id } = useParams(); // ticket ID from URL
    const [ticket, setTicket] = useState(null);
    const [seats, setSeats] = useState([]);
    const [selectedSeatIds, setSelectedSeatIds] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tickets/${id}`)
            .then(res => res.json())
            .then(data => {
                setTicket(data);

                // Generate seat layout based on totalSeats or a default 40
                const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
                const mockSeats = rows.flatMap(row =>
                    [1, 2, 3, 4].map(num => {
                        const seatId = `${row}${num}`;
                        return { id: seatId, status: 'AVAILABLE' }; // Initially all available
                    })
                );
                setSeats(mockSeats);
            })
            .catch(err => console.log(err));
    }, [id]);

    const toggleSeat = (seatId) => {
        setSelectedSeatIds(prev =>
            prev.includes(seatId)
                ? prev.filter(id => id !== seatId)
                : [...prev, seatId]
        );
    };

    if (!ticket) return <p>Loading ticket...</p>;

    // Price calculation
    const seatFarePerSeat = ticket.price || 900;
    const selectedCount = selectedSeatIds.length;
    const totalFare = selectedCount * seatFarePerSeat;
    const serviceCharge = selectedCount > 0 ? 50 : 0;
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">{ticket.busName} - Seat Selection</h2>
            <h2 className="text-xs">{ticket.from} - {ticket.to}</h2>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* BUS Layout */}
                <div className="border border-gray-300 p-5 md:p-6 rounded-xl bg-white shadow-sm flex-1">
                    {/* Header with Front & Driver */}
                    <div className="relative flex justify-between items-center mb-6 pb-3 border-b border-gray-200">
                        <div className="text-lg font-semibold text-gray-700">Front</div>
                        <div className="flex items-center gap-2.5 text-lg font-semibold text-gray-800">
                            Driver
                            <GiSteeringWheel className="text-4xl text-gray-700" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
                    </div>

                    {/* Seats in 2/2 formation */}
                    <div className="flex flex-col gap-3">
                        {Array.from({ length: Math.ceil(seats.length / 4) }).map((_, rowIndex) => {
                            const rowSeats = seats.slice(rowIndex * 4, rowIndex * 4 + 4);
                            const leftSeats = rowSeats.slice(0, 2);
                            const rightSeats = rowSeats.slice(2, 4);

                            return (
                                <div key={rowIndex} className="grid grid-cols-5 items-center gap-3 justify-items-center">
                                    {/* Left side seats */}
                                    <div className="col-span-2 flex justify-end gap-2">
                                        {leftSeats.map(seat => {
                                            const isSelected = selectedSeatIds.includes(seat.id);
                                            const isBooked = seat.status !== 'AVAILABLE';
                                            return (
                                                <button
                                                    key={seat.id}
                                                    onClick={() => toggleSeat(seat.id)}
                                                    disabled={isBooked}
                                                    className={`flex flex-col items-center transition-all duration-150
                        ${isBooked ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}
                        ${isSelected ? 'scale-110' : ''}`}
                                                >
                                                    <MdEventSeat
                                                        className={`text-5xl sm:text-6xl
                          ${isSelected ? 'text-green-600' : isBooked ? 'text-gray-300' : 'text-gray-500 hover:text-blue-600'}`}
                                                    />
                                                    <span className={`text-sm font-medium mt-1.5
                          ${isSelected ? 'text-green-700 font-semibold' : isBooked ? 'text-gray-400' : 'text-gray-700'}`}>
                                                        {seat.id}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Aisle */}
                                    <div className="col-span-1"></div>

                                    {/* Right side seats */}
                                    <div className="col-span-2 flex justify-start gap-2">
                                        {rightSeats.map(seat => {
                                            const isSelected = selectedSeatIds.includes(seat.id);
                                            const isBooked = seat.status !== 'AVAILABLE';
                                            return (
                                                <button
                                                    key={seat.id}
                                                    onClick={() => toggleSeat(seat.id)}
                                                    disabled={isBooked}
                                                    className={`flex flex-col items-center transition-all duration-150
                        ${isBooked ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}
                        ${isSelected ? 'scale-110' : ''}`}
                                                >
                                                    <MdEventSeat
                                                        className={`text-5xl sm:text-6xl
                          ${isSelected ? 'text-green-600' : isBooked ? 'text-gray-300' : 'text-gray-500 hover:text-blue-600'}`}
                                                    />
                                                    <span className={`text-sm font-medium mt-1.5
                          ${isSelected ? 'text-green-700 font-semibold' : isBooked ? 'text-gray-400' : 'text-gray-700'}`}>
                                                        {seat.id}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* SUMMARY */}
                <div className="lg:w-1/3 bg-gray-50 p-5 rounded-lg border">
                    <h3 className="text-lg font-bold mb-4">Seat Summary</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Selected Seats</span>
                            <span>{selectedSeatIds.join(", ") || "None"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Seat Count</span>
                            <span>{selectedCount}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Seat Fare</span>
                            <span>৳{totalFare}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Service Charge</span>
                            <span>৳{serviceCharge}</span>
                        </div>
                        <div className="flex justify-between font-bold text-base border-t pt-2">
                            <span>Total Payable</span>
                            <span>৳{totalFare + serviceCharge}</span>
                        </div>
                    </div>

                    <button
                        disabled={selectedCount === 0}
                        className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;