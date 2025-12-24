import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PopularRoutes = () => {
    const routes = [
        {
            from: "Dhaka",
            to: "Chittagong",
            price: "৳ 900",
        },
        {
            from: "Dhaka",
            to: "Cox's Bazar",
            price: "৳ 1200",
        },
        {
            from: "Mymensingh",
            to: "Dhaka",
            price: "৳ 450",
        },
        {
            from: "Sylhet",
            to: "Dhaka",
            price: "৳ 800",
        },
        {
            from: "Rajshahi",
            to: "Dhaka",
            price: "৳ 750",
        },
        {
            from: "Khulna",
            to: "Dhaka",
            price: "৳ 850",
        },
    ];
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Popular <span className="text-yellow-500">Routes</span>
                    </h2>
                    <p className="text-gray-600">
                        যাত্রীদের সবচেয়ে বেশি বুক করা জনপ্রিয় রুটসমূহ
                    </p>
                </div>

                {/* Routes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {routes.map((route, index) => (
                        <div
                            key={index}
                            className="border rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition cursor-pointer group"
                        >
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {route.from} <FaArrowRight className="inline mx-2 text-yellow-500" /> {route.to}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Starting from {route.price}
                                </p>
                            </div>

                            <span className="text-yellow-500 group-hover:translate-x-1 transition">
                                <FaArrowRight />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularRoutes;