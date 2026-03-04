import React from 'react';
import { useNavigate } from 'react-router';
import { FaBus, FaArrowLeft, FaRoute, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-6 relative overflow-hidden">

            {/* Animated Background Road Lines */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-900 flex justify-around items-center">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ x: [-100, 1000] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                            className="w-12 h-1 bg-zinc-800"
                        />
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center max-w-xl w-full"
            >
                {/* 404 Header with Bus Animation */}
                <div className="relative mb-12">
                    <motion.h1
                        initial={{ letterSpacing: "0.5em", opacity: 0 }}
                        animate={{ letterSpacing: "0.1em", opacity: 0.1 }}
                        className="text-[12rem] md:text-[16rem] font-black text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
                    >
                        404
                    </motion.h1>

                    <motion.div
                        animate={{ x: [-20, 20, -20], rotate: [-2, 2, -2] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-20 flex justify-center"
                    >
                        <div className="bg-orange-500 p-8 rounded-[2.5rem] shadow-[0_0_50px_rgba(249,115,22,0.3)]">
                            <FaBus className="text-7xl md:text-8xl text-white" />
                        </div>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter">
                            Wrong <span className="text-orange-500">Terminal!</span>
                        </h2>
                        <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">Route Not Found on BusAura Map</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl inline-block mx-auto">
                        <p className="text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed">
                            It seems this bus took a detour or the route is under construction. Let's get you back to the main station.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/')}
                            className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 uppercase italic tracking-widest text-xs flex items-center justify-center gap-3 transition-all"
                        >
                            <FaArrowLeft className="text-[10px]" /> Back to Terminal
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/tickets')}
                            className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-black rounded-2xl uppercase italic tracking-widest text-xs flex items-center justify-center gap-3 transition-all"
                        >
                            <FaRoute className="text-[10px]" /> View Routes
                        </motion.button>
                    </div>
                </div>

                {/* Bottom Status Badge */}
                <div className="mt-12 flex justify-center gap-6">
                    <div className="flex items-center gap-2 text-zinc-600 font-black text-[9px] uppercase tracking-widest">
                        <FaMapMarkedAlt /> System Normal
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 font-black text-[9px] uppercase tracking-widest border-l border-zinc-800 pl-6">
                        Lost Connection: 404
                    </div>
                </div>
            </motion.div>

            {/* Glowing Decorative Orbs */}
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
    );
};

export default Error404;