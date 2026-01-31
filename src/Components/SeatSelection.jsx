import React, { useState } from 'react';
import { MdEventSeat } from 'react-icons/md';

const SeatSelection = () => {
    const mockSeats = Array.from({ length: 40 }, (_, i) => {
        const randomStatus =
            i % 7 === 0 ? 'BOOKED' :
                i % 11 === 0 ? 'SOLD' :
                    i % 13 === 0 ? 'BLOCKED' :
                        'AVAILABLE';

        return { id: i + 1, status: randomStatus };
    });

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
            return "text-green-600 dark:text-green-400";

        switch (seat.status) {
            case 'AVAILABLE':
                return "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400";
            case 'BOOKED':
                return "text-purple-600 dark:text-purple-400";
            case 'SOLD':
                return "text-pink-600 dark:text-pink-400";
            case 'BLOCKED':
                return "text-gray-400 dark:text-gray-500";
            default:
                return "text-gray-400 dark:text-gray-500";
        }
    };

    const selectedCount = selectedSeatIds.length;
    const totalFare = selectedCount * seatFarePerSeat;
    const serviceCharge = selectedCount > 0 ? 50 : 0;
    return (
        // <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow">

        //     {/* Legend */}
        //     <div className="flex gap-6 justify-center text-sm mb-6">
        //         <div className="flex items-center gap-1"><MdEventSeat className="text-gray-500" /> Available</div>
        //         <div className="flex items-center gap-1"><MdEventSeat className="text-green-600" /> Selected</div>
        //         <div className="flex items-center gap-1"><MdEventSeat className="text-purple-600" /> Booked</div>
        //         <div className="flex items-center gap-1"><MdEventSeat className="text-pink-600" /> Sold</div>
        //         <div className="flex items-center gap-1"><MdEventSeat className="text-gray-400" /> Blocked</div>
        //     </div>

        //     <div className="flex gap-10">

        //         {/* Seat Layout */}
        //         <div className="w-3/5">
        //             <div className="text-right mb-2 text-sm text-gray-500">🧑‍✈️ Driver</div>

        //             <div className="grid grid-cols-10 gap-y-4">
        //                 {seats.map((seat, index) => {
        //                     const pos = index % 4;

        //                     const colStart =
        //                         pos === 0 ? "col-start-1" :
        //                             pos === 1 ? "col-start-3" :
        //                                 pos === 2 ? "col-start-7" :
        //                                     "col-start-9";

        //                     return (
        //                         <div key={seat.id} className={`col-span-2 ${colStart} flex justify-center`}>
        //                             <button
        //                                 onClick={() => toggleSeat(seat.id)}
        //                                 disabled={seat.status !== 'AVAILABLE'}
        //                                 className="flex flex-col items-center text-xs"
        //                             >
        //                                 <MdEventSeat className={`text-2xl ${getSeatColor(seat)}`} />
        //                                 <span>{seat.id}</span>
        //                             </button>
        //                         </div>
        //                     );
        //                 })}
        //             </div>

        //             <div className="text-center mt-4 text-gray-500 text-sm">
        //                 ↑ Front of Bus
        //             </div>
        //         </div>

        //         {/* Right Panel */}
        //         <div className="w-2/5 bg-gray-50 p-5 rounded-lg border">
        //             <h3 className="text-lg font-bold mb-4">Seat Summary</h3>

        //             <div className="space-y-2 text-sm">
        //                 <div className="flex justify-between">
        //                     <span>Selected Seats</span>
        //                     <span>{selectedSeatIds.join(", ") || "None"}</span>
        //                 </div>
        //                 <div className="flex justify-between">
        //                     <span>Seat Count</span>
        //                     <span>{selectedCount}</span>
        //                 </div>
        //                 <div className="flex justify-between">
        //                     <span>Seat Fare</span>
        //                     <span>৳{totalFare}</span>
        //                 </div>
        //                 <div className="flex justify-between">
        //                     <span>Service Charge</span>
        //                     <span>৳{serviceCharge}</span>
        //                 </div>
        //                 <div className="flex justify-between font-bold text-base border-t pt-2">
        //                     <span>Total Payable</span>
        //                     <span>৳{totalFare + serviceCharge}</span>
        //                 </div>
        //             </div>

        //             <button
        //                 disabled={selectedCount === 0}
        //                 className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 disabled:opacity-50"
        //             >
        //                 Proceed to Payment
        //             </button>
        //         </div>
        //     </div>
        // </div>

        <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg">

            {/* Legend */}
            <div className="flex flex-wrap gap-6 justify-center text-sm mb-6 text-gray-700 dark:text-gray-200">
                <div className="flex items-center gap-1"><MdEventSeat className="text-gray-500 dark:text-gray-300" /> Available</div>
                <div className="flex items-center gap-1"><MdEventSeat className="text-green-600 dark:text-green-400" /> Selected</div>
                <div className="flex items-center gap-1"><MdEventSeat className="text-purple-600 dark:text-purple-400" /> Booked</div>
                <div className="flex items-center gap-1"><MdEventSeat className="text-pink-600 dark:text-pink-400" /> Sold</div>
                <div className="flex items-center gap-1"><MdEventSeat className="text-gray-400 dark:text-gray-500" /> Blocked</div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">

                {/* Seat Layout */}
                <div className="lg:w-3/5">
                    <div className="text-right mb-2 text-sm text-gray-500 dark:text-gray-400">
                        🧑‍✈️ Driver
                    </div>

                    <div className="grid grid-cols-10 gap-y-4">
                        {seats.map((seat, index) => {
                            const pos = index % 4;

                            const colStart =
                                pos === 0 ? "col-start-1" :
                                    pos === 1 ? "col-start-3" :
                                        pos === 2 ? "col-start-7" :
                                            "col-start-9";

                            return (
                                <div
                                    key={seat.id}
                                    className={`col-span-2 ${colStart} flex justify-center`}
                                >
                                    <button
                                        onClick={() => toggleSeat(seat.id)}
                                        disabled={seat.status !== 'AVAILABLE'}
                                        className="flex flex-col items-center text-xs focus:outline-none"
                                    >
                                        <MdEventSeat className={`text-2xl transition-colors ${getSeatColor(seat)}`} />
                                        <span className="mt-0.5">{seat.id}</span>
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-4 text-gray-500 dark:text-gray-400 text-sm">
                        ↑ Front of Bus
                    </div>
                </div>

                {/* Right Panel */}
                <div className="lg:w-2/5 bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
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
                        <div className="flex justify-between font-bold text-base border-t border-gray-300 dark:border-gray-600 pt-2">
                            <span>Total Payable</span>
                            <span>৳{totalFare + serviceCharge}</span>
                        </div>
                    </div>

                    <button
                        disabled={selectedCount === 0}
                        className="
              mt-6 w-full py-3 rounded
              bg-blue-600 text-white font-semibold
              hover:bg-blue-700 transition
              disabled:opacity-50 disabled:cursor-not-allowed
            "
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;