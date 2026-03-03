import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaUsers, FaGlobeAmericas, FaAward } from 'react-icons/fa';

const AboutUs = () => {
    const stats = [
        { icon: <FaUsers />, count: "500K+", label: "Happy Travelers", color: "text-blue-500" },
        { icon: <FaGlobeAmericas />, count: "150+", label: "Routes Covered", color: "text-orange-500" },
        { icon: <FaHistory />, count: "10+", label: "Years Experience", color: "text-green-500" },
        { icon: <FaAward />, count: "25+", label: "Awards Won", color: "text-purple-500" },
    ];

    return (
        <section className="bg-white dark:bg-zinc-950 py-24 relative overflow-hidden transition-colors duration-500">
            {/* Background Decorative Blur */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Image/Illustration Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-900">
                            <img
                                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop"
                                alt="Our Journey"
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-6 uppercase italic leading-tight">
                                Redefining Your <span className="text-orange-500">Travel Experience</span>
                            </h2>
                            <p className="text-slate-600 dark:text-zinc-400 text-lg leading-relaxed font-medium">
                                BusAura started with a simple vision: to make bus travel in Bangladesh as seamless as a click. Today, we are the nation's most trusted platform, connecting thousands of passengers with their destinations every day.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 bg-slate-50 dark:bg-zinc-900/50 rounded-[2rem] border border-slate-100 dark:border-zinc-800 hover:border-orange-500/30 transition-all group"
                                >
                                    <div className={`text-3xl mb-3 ${stat.color} group-hover:scale-110 transition-transform`}>
                                        {stat.icon}
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white">{stat.count}</h4>
                                    <p className="text-slate-500 dark:text-zinc-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-zinc-900 dark:bg-orange-500 text-white font-black rounded-2xl shadow-lg shadow-orange-500/20 uppercase italic tracking-widest text-sm"
                        >
                            Learn More About Us
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;