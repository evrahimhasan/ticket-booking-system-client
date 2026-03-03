import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdDirectionsBus } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white pt-20 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                                <MdDirectionsBus className="text-3xl text-white" />
                            </div>
                            <h2 className="text-3xl font-black italic tracking-tighter">
                                Bus<span className="text-orange-500">Aura</span>
                            </h2>
                        </div>
                        <p className="text-zinc-400 leading-relaxed font-medium">
                            BusAura is a trusted online ticket booking platform where you can easily buy bus tickets for various routes in the country.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
                                { icon: <FaInstagram />, color: "hover:bg-pink-600" },
                                { icon: <FaTwitter />, color: "hover:bg-sky-500" },
                                { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className={`h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 ${social.color}`}
                                    href="#"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-500">Quick Links</h3>
                        <ul className="space-y-4">
                            <li className="text-zinc-400 hover:text-orange-500 
                                    transition-colors duration-300">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-zinc-400 hover:text-orange-500 
                                    transition-colors duration-300">
                                <a href="/">Search Tickets</a>
                            </li>
                            <li className="text-zinc-400 hover:text-orange-500 
                                    transition-colors duration-300">
                                <a href="/">Check Booking</a>
                            </li>
                            <li className="text-zinc-400 hover:text-orange-500 
                                    transition-colors duration-300">
                                <a href="/about-us">About Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-500">Support</h3>
                        <ul className="space-y-4">
                            {['Contact Us', 'Terms & Conditions', 'Privacy Policy', 'Refund Policy', 'FAQ'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-zinc-400 hover:text-orange-500 
                                    transition-colors duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter/Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-500">Contact Info</h3>
                        <div className="space-y-4 text-zinc-400">
                            <p className="flex items-center gap-3">
                                <span className="text-orange-500 italic">Email:</span> support@busaura.com
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-orange-500 italic">Hotline:</span> +880 1234 567890
                            </p>
                            <div className="pt-4">
                                <p className="text-sm mb-4">Subscribe for updates</p>
                                <div className="flex bg-zinc-900 border border-zinc-800 rounded-xl p-1 focus-within:border-orange-500 transition-colors">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="bg-transparent border-none outline-none px-3 w-full text-sm"
                                    />
                                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors">
                                        Join
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-zinc-900 text-center">
                    <p className="text-zinc-500 text-sm font-medium">
                        © 2026 <span className="text-orange-500 font-bold italic">BusAura</span> — All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;