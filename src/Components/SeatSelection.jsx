import React, { useState } from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdEventSeat } from 'react-icons/md';

const SeatSelection = () => {
    // Row letters
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    // Generate seats like A1 A2 A3 A4 , B1 B2 B3 B4
    const mockSeats = rows.flatMap(row =>
        [1, 2, 3, 4].map(num => {

            const id = `${row}${num}`;

            const randomStatus =
                Math.random() < 0.1 ? 'BOOKED' :
                    Math.random() < 0.15 ? 'SOLD' :
                        Math.random() < 0.1 ? 'BLOCKED' :
                            'AVAILABLE';

            return { id, status: randomStatus };
        })
    );

    const [seats] = useState(mockSeats);
    const [selectedSeatIds, setSelectedSeatIds] = useState([]);

    const seatFarePerSeat = 900;

    const toggleSeat = (seatId) => {

        const seat = seats.find(s => s.id === seatId);

        if (seat.status !== 'AVAILABLE') return;

        setSelectedSeatIds(prev =>
            prev.includes(seatId)
                ? prev.filter(id => id !== seatId)
                : [...prev, seatId]
        );
    };


    const getSeatColor = (seat) => {

        if (selectedSeatIds.includes(seat.id))
            return "text-green-600";

        switch (seat.status) {

            case 'AVAILABLE':
                return "text-gray-600 hover:text-blue-600";

            case 'BOOKED':
                return "text-purple-600";

            case 'SOLD':
                return "text-pink-600";

            case 'BLOCKED':
                return "text-gray-400";

            default:
                return "text-gray-400";
        }
    };

    const selectedCount = selectedSeatIds.length;

    const totalFare = selectedCount * seatFarePerSeat;

    const serviceCharge = selectedCount > 0 ? 50 : 0;
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">

            {/* Legend - unchanged */}
            <div className="flex gap-6 justify-center text-sm mb-6">
                <div className="flex items-center gap-1">
                    <MdEventSeat className="text-gray-500" /> Available
                </div>
                <div className="flex items-center gap-1">
                    <MdEventSeat className="text-green-600" /> Selected
                </div>
                <div className="flex items-center gap-1">
                    <MdEventSeat className="text-purple-600" /> Booked
                </div>
                <div className="flex items-center gap-1">
                    <MdEventSeat className="text-pink-600" /> Sold
                </div>
                <div className="flex items-center gap-1">
                    <MdEventSeat className="text-gray-400" /> Blocked
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">

                {/* BUS LAYOUT */}
                <div className="lg:w-3/5 border p-6 rounded-lg">

                    {/* DRIVER section - unchanged */}
                    <div className="flex justify-between mb-6">
                        <div className="text-sm text-gray-500">Front</div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <GiSteeringWheel /> Driver
                        </div>
                    </div>

                    {/* SEATS - updated layout */}
                    <div className="space-y-3 md:space-y-4">

                        {rows.map(row => {
                            const rowSeats = seats.filter(s => s.id.startsWith(row));

                            // Assuming your seats are ordered: A B | C D E   (2 left + 3 right)
                            const leftSeats = rowSeats.slice(0, 2);   // A, B
                            const rightSeats = rowSeats.slice(2, 5);   // C, D, E  (if you have 5 seats per row)

                            return (
                                <div
                                    key={row}
                                    className="grid grid-cols-12 items-center gap-1 md:gap-2"
                                >
                                    {/* Left side seats (2 seats) */}
                                    <div className="col-span-5 flex justify-end gap-1 md:gap-3 pr-2 md:pr-4">
                                        {leftSeats.map(seat => (
                                            <button
                                                key={seat.id}
                                                onClick={() => toggleSeat(seat.id)}
                                                disabled={seat.status !== "AVAILABLE"}
                                                className="flex flex-col items-center text-xs w-10 md:w-12"
                                            >
                                                <MdEventSeat
                                                    className={`text-3xl md:text-4xl ${getSeatColor(seat)}`}
                                                />
                                                <span className="mt-1">{seat.id}</span>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Aisle - wider empty space like your drawing */}
                                    <div className="col-span-2 text-center text-gray-300 text-xl md:text-2xl font-light">
                                        {/* You can leave empty or put • • • or just space */}
                                    </div>

                                    {/* Right side seats (3 seats) */}
                                    <div className="col-span-5 flex justify-start gap-1 md:gap-3 pl-2 md:pl-4">
                                        {rightSeats.map(seat => (
                                            <button
                                                key={seat.id}
                                                onClick={() => toggleSeat(seat.id)}
                                                disabled={seat.status !== "AVAILABLE"}
                                                className="flex flex-col items-center text-xs w-10 md:w-12"
                                            >
                                                <MdEventSeat
                                                    className={`text-3xl md:text-4xl ${getSeatColor(seat)}`}
                                                />
                                                <span className="mt-1">{seat.id}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                </div>

                {/* SUMMARY - unchanged */}
                <div className="lg:w-2/5 bg-gray-50 p-5 rounded-lg border">
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