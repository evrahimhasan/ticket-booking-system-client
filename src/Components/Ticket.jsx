import React from 'react';
import { Link } from 'react-router';

const Ticket = () => {
    const buses = [
        {
            "busName": "GreenLine Express",
            "busType": "AC Sleeper",
            "busNumber": "DL-05-AB-1234",
            "from": "Dhaka",
            "to": "Chittagong",
            "journeyDate": "2026-02-05",
            "departureTime": "22:30",
            "price": 1200,
            "totalSeats": 40,
            "mainPhotoURL": "https://example.com/images/bus1.jpg"
        },
        {
            "busName": "Skyline Travels",
            "busType": "Non-AC Seater",
            "busNumber": "DL-12-CD-5678",
            "from": "Dhaka",
            "to": "Sylhet",
            "journeyDate": "2026-02-06",
            "departureTime": "18:00",
            "price": 800,
            "totalSeats": 45,
            "mainPhotoURL": "https://example.com/images/bus2.jpg"
        },
        {
            "busName": "RapidLine",
            "busType": "AC Semi-Sleeper",
            "busNumber": "DL-23-EF-9012",
            "from": "Chittagong",
            "to": "Dhaka",
            "journeyDate": "2026-02-05",
            "departureTime": "21:00",
            "price": 1100,
            "totalSeats": 42,
            "mainPhotoURL": "https://example.com/images/bus3.jpg"
        },
        {
            "busName": "Comfort Travels",
            "busType": "AC Sleeper",
            "busNumber": "DL-34-GH-3456",
            "from": "Dhaka",
            "to": "Khulna",
            "journeyDate": "2026-02-07",
            "departureTime": "20:30",
            "price": 1000,
            "totalSeats": 40,
            "mainPhotoURL": "https://example.com/images/bus4.jpg"
        },
        {
            "busName": "SilverLine",
            "busType": "Non-AC Seater",
            "busNumber": "DL-45-IJ-7890",
            "from": "Dhaka",
            "to": "Rajshahi",
            "journeyDate": "2026-02-08",
            "departureTime": "19:45",
            "price": 750,
            "totalSeats": 50,
            "mainPhotoURL": "https://example.com/images/bus5.jpg"
        }
    ]

    return (
        <div className="space-y-6">
            {buses.map((bus, index) => (
                <div
                    key={index}
                    className="mx-auto w-full max-w-4xl rounded-xl border border-gray-200 bg-white p-5 shadow-md transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-950/30"
                >
                    {/* Top row: Operator Name + Route/Service Name + AC/Non-AC */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {bus.busName}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {bus.busNumber} {bus.busType.toUpperCase()} {/* e.g. 4053 MEHER-KUSH-COX (PADMA) */}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${bus.busType.toLowerCase().includes('ac')
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                }`}>
                                {bus.busType} AC
                            </span>
                            {bus.busType.toLowerCase().includes('non') && (
                                <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                                    No Extra Charge
                                </span>
                            )}
                        </div>
                    </div>

                    <hr className="my-4 border-gray-200 dark:border-gray-700" />

                    {/* Main content: Times, Points, Seats, Price */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        {/* Left: Departure */}
                        <div className="flex-1">
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                {bus.departureTime}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {bus.from}
                            </p>
                            <p className="mt-1 text-xs text-gray-600 dark:text-gray-500">
                                Boarding Point
                            </p>
                        </div>

                        {/* Middle: Seats Left + Arrow */}
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="text-sm font-medium text-red-600 dark:text-red-400">
                                    Seats Left: {bus.totalSeats > 0 ? bus.totalSeats : 'Sold Out'}
                                </div>
                                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                                    🚌
                                </div>
                            </div>
                            <div className="h-0.5 w-20 sm:w-32 bg-gray-300 dark:bg-gray-600" />
                            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">to</span>
                        </div>

                        {/* Right: Arrival + Price + Button */}
                        <div className="flex-1 flex flex-col md:items-end items-start md:text-right gap-4">
                            <div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    {bus.departureTime} {/* এখানে arrival time থাকলে replace করো, JSON-এ নেই তাই placeholder */}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {bus.to}
                                </p>
                                <p className="mt-1 text-xs text-gray-600 dark:text-gray-500">
                                    Dropping Point
                                </p>
                            </div>

                            <div className="flex flex-col items-end">
                                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                                    ৳{bus.price}
                                </p>
                                <Link
                                to={'/seat-selection'}
                                    className="
                mt-3 px-8 py-3 rounded-lg 
                bg-red-600 hover:bg-red-700 text-white font-semibold 
                transition-colors focus:outline-none focus:ring-2 focus:ring-red-500
                dark:bg-red-600 dark:hover:bg-red-500
              "
                                >
                                    View Seats
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Ticket;