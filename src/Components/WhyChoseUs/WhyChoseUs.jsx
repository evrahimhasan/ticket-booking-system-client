import React from 'react';
import { motion } from 'framer-motion';
import { FaBus, FaClock, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const WhyChoseUs = () => {
    const features = [
        {
            icon: <FaBus />,
            title: "Verified Operators",
            desc: "Travel with confidence with a reliable and verified bus operator.",
            color: "from-orange-400 to-orange-600"
        },
        {
            icon: <FaShieldAlt />,
            title: "Secure Payment",
            desc: "100% secure online payment gateway",
            color: "from-orange-500 to-orange-700"
        },
        {
            icon: <FaClock />,
            title: "Real-Time Booking",
            desc: "Live seat availability and instant confirmation.",
            color: "from-orange-600 to-orange-800"
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Friendly",
            desc: "Equally easy to use on mobile, tab and desktop.",
            color: "from-orange-500 to-orange-600"
        }
    ];

    return (
        <section className="bg-white dark:bg-zinc-950 py-24 relative overflow-hidden transition-colors duration-500">
            {/* Background Light Blur Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30 dark:opacity-10">
                <div className="absolute top-0 left-10 w-72 h-72 bg-orange-300 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-10 w-72 h-72 bg-orange-200 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white  italic tracking-tight"
                    >
                        WHY CHOOSE <span className="text-orange-500">BusAura</span>?
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        className="h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"
                    />
                    <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto mt-6 font-medium">
                        BusAura gives you an easy, fast and secure online bus ticket booking experience.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className="h-full bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-200 dark:border-zinc-800 hover:border-orange-500/50 transition-all duration-500 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-orange-500/20">

                                {/* Animated Icon Container */}
                                <div className="mb-8 relative inline-block">
                                    <div className={`h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white text-3xl shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                                        {item.icon}
                                    </div>
                                    {/* Icon Glow */}
                                    <div className="absolute inset-0 bg-orange-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
                                </div>

                                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 uppercase tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                                    {item.desc}
                                </p>

                                {/* Decorative Corner Accent */}
                                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-slate-200 dark:bg-zinc-800 group-hover:bg-orange-500 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoseUs;