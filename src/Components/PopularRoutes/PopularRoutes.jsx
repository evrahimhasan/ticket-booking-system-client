import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBusAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router';

const PopularRoutes = () => {
    const routes = [
        { from: "Mymensingh", to: "Chittagong", price: "900", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=400&auto=format&fit=crop" },
        { from: "Mymensingh", to: "Cox's Bazar", price: "1200", image: "https://images.unsplash.com/photo-1623124112833-28689531846b?q=80&w=400&auto=format&fit=crop" },
        { from: "Mymensingh", to: "Sylhet", price: "450", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400&auto=format&fit=crop" },
        { from: "Mymensingh", to: "Barisal", price: "800", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=400&auto=format&fit=crop" },
        { from: "Mymensingh", to: "Rajshahi", price: "750", image: "https://images.unsplash.com/photo-1568248794833-3d0d8294695b?q=80&w=400&auto=format&fit=crop" },
        { from: "Mymensingh", to: "Khagrachari", price: "850", image: "https://images.unsplash.com/photo-1517055745271-925102046869?q=80&w=400&auto=format&fit=crop" },
    ];

    return (
        <section className="bg-slate-50 dark:bg-zinc-950 py-24 transition-colors duration-500">
            <div className="container mx-auto px-6">

                {/* Section Title with refined typography */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-orange-600 dark:text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
                    >
                        Top Destinations
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white uppercase italic italic"
                    >
                        Popular <span className="text-orange-500">Routes</span>
                    </motion.h2>
                    <p className="text-slate-500 dark:text-zinc-400 max-w-lg mx-auto font-medium">
                        Choose your destination from the most popular routes booked by travelers.
                    </p>
                </div>

                {/* Routes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {routes.map((route, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white dark:bg-zinc-900 rounded-[2rem] p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)] border border-slate-100 dark:border-zinc-800 hover:border-orange-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
                        >
                            {/* Inner Content */}
                            <div className="flex items-center gap-5">
                                {/* Route Icon/Indicator */}
                                <div className="h-14 w-14 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500 text-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-inner">
                                    <FaBusAlt />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                            {route.from}
                                        </h3>
                                        <FaArrowRight className="text-orange-500 text-xs group-hover:translate-x-1 transition-transform" />
                                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                            {route.to}
                                        </h3>
                                    </div>

                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center text-slate-400 dark:text-zinc-500 text-sm font-medium">
                                            <HiOutlineLocationMarker className="mr-1 text-orange-400" />
                                            Direct Trip
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Starting From</p>
                                            <p className="text-lg font-black text-orange-600 dark:text-orange-500">
                                                ৳ {route.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Decorative Element */}
                            <div className="absolute -bottom-2 -right-2 h-16 w-16 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* View All Button (Optional) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <Link
                        to='/tickets'
                        className="px-8 py-4 bg-white dark:bg-zinc-900 border-2 border-orange-500 text-orange-500 font-bold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-lg shadow-orange-500/10 italic">
                        Explore All Routes
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default PopularRoutes;