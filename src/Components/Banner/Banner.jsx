import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useMemo, useState } from 'react';
import { MapPin, Calendar, Navigation, Bus } from "lucide-react";

const Banner = () => {

    const [index, setIndex] = useState(0);
    const [isSearching, setIsSearching] = useState(false);

    // Banner Data (Bus Images)
    const SLIDE_DATA = useMemo(() => [
        {
            id: 1,
            title: "Journey with Comfort",
            highlight: "BusAura",
            desc: "Experience the luxury of premium travel across the country with our top-tier fleet.",
            img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000",
        },
        {
            id: 2,
            title: "Safe & Reliable",
            highlight: "Travel Plus",
            desc: "Your safety is our priority. Professional drivers and well-maintained buses for every trip.",
            img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=2000",
        },
        {
            id: 3,
            title: "Explore Every",
            highlight: "Destination",
            desc: "Connecting you to over 500+ routes daily. Booking your seat is now just a click away.",
            img: "https://i.ibb.co.com/xt5HjV0X/29a6ae36-fe34-417c-bf66-14913ef83e62.jpg",
        },
    ], []);

    // Mouse Parallax Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    const bgX = useTransform(mouseX, [-500, 500], [15, -15]);
    const bgY = useTransform(mouseY, [-500, 500], [15, -15]);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        x.set(clientX - innerWidth / 2);
        y.set(clientY - innerHeight / 2);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isSearching) {
                setIndex((prev) => (prev + 1) % SLIDE_DATA.length);
            }
        }, 5000);
        return () => clearInterval(timer);
    }, [isSearching, SLIDE_DATA.length]);

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-zinc-950"
        >
            {/* 1. BACKGROUND LAYER */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    style={{ x: bgX, y: bgY, scale: 1.1 }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        filter: isSearching ? "brightness(0.3) blur(8px)" : "brightness(0.5) blur(0px)"
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={SLIDE_DATA[index].img}
                        alt="Bus Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                </motion.div>
            </AnimatePresence>

            {/* 2. CONTENT LAYER */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mb-10 space-y-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                            {SLIDE_DATA[index].title} <br />
                            <span className="text-orange-500 italic drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                                {SLIDE_DATA[index].highlight}
                            </span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light">
                            {SLIDE_DATA[index].desc}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* 3. DYNAMIC BUS SEARCH BOX */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-full bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-[2rem] border border-white/20 shadow-2xl"
                    onMouseEnter={() => setIsSearching(true)}
                    onMouseLeave={() => setIsSearching(false)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        {/* FROM */}
                        <div className="text-left space-y-2">
                            <label className="text-xs font-bold text-orange-400 uppercase ml-2 flex items-center gap-1">
                                <Navigation className="w-3 h-3" /> From
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Leaving from..."
                                    className="w-full bg-white/10 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white/20 transition-all"
                                />
                            </div>
                        </div>

                        {/* TO */}
                        <div className="text-left space-y-2">
                            <label className="text-xs font-bold text-orange-400 uppercase ml-2 flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> To
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Going to..."
                                    className="w-full bg-white/10 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white/20 transition-all"
                                />
                            </div>
                        </div>

                        {/* DATE */}
                        <div className="text-left space-y-2">
                            <label className="text-xs font-bold text-orange-400 uppercase ml-2 flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> Journey Date
                            </label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="date"
                                    className="w-full bg-white/10 border border-white/10 text-white rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white/20 transition-all"
                                />
                            </div>
                        </div>

                        {/* SEARCH BUTTON */}
                        <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-900/20 transition-all flex items-center justify-center gap-2 group">
                            <Bus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Search Buses
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Progress Lines */}
            <div className="absolute bottom-0 left-0 w-full h-1 flex gap-1 px-2 opacity-30">
                {SLIDE_DATA.map((_, i) => (
                    <div key={i} className={`h-full flex-1 rounded-full ${index === i ? 'bg-orange-500' : 'bg-white/20'}`} />
                ))}
            </div>
        </section>

    );
};

export default Banner;