import React from 'react';
import { motion } from 'framer-motion';
import { IoCheckmarkCircleSharp, IoSearchCircle } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';

const BookingSteps = () => {
    const steps = [
        {
            number: "01",
            title: "Search",
            icon: <IoSearchCircle />,
            description: "Enter your starting point, destination, and travel date to explore available buses.",
        },
        {
            number: "02",
            title: "Select",
            icon: <IoCheckmarkCircleSharp />,
            description: "Choose your preferred bus, view seat layout, and pick your seats.",
        },
        {
            number: "03",
            title: "Pay",
            icon: <MdPayment />,
            description: "Complete your booking securely using cards, mobile banking, or other payment options.",
        }
    ];

    return (
        <section className="bg-[#fcfcfc] dark:bg-zinc-950 py-24 relative overflow-hidden 
        transition-colors duration-500">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200 dark:bg-orange-900/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 dark:bg-orange-900/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h5 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-3">Simple Process</h5>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">
                        Buy tickets in <span className="text-orange-500">3 easy steps</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card with Orange Gradient Border on Hover */}
                            <div className="h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-8 rounded-[2rem] border-2 border-slate-100 dark:border-zinc-800 group-hover:border-orange-500 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.05)] group-hover:shadow-orange-500/20">

                                {/* Large Shadow Background Number */}
                                <div className="absolute top-6 right-8 text-7xl font-black text-slate-100 dark:text-white/5 group-hover:text-orange-500/10 transition-colors duration-500">
                                    {step.number}
                                </div>

                                {/* Icon Design */}
                                <div className="relative mb-10 inline-block">
                                    <div className="absolute inset-0 bg-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="relative h-20 w-20 flex items-center justify-center rounded-2xl bg-orange-500 text-white text-5xl shadow-lg transform group-hover:-rotate-6 transition-transform duration-500">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase italic">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed font-medium">
                                    {step.description}
                                </p>

                                {/* Animated Line at bottom */}
                                <div className="mt-8 h-1 w-0 bg-orange-500 group-hover:w-full transition-all duration-500 rounded-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookingSteps;