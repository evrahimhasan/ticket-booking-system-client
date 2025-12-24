import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { MdDirectionsBus } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-[#1c1c1c] text-white pt-12 pb-6 mt-16">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">

                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <MdDirectionsBus className="text-3xl text-yellow-400" />
                        <h2 className="text-2xl font-bold tracking-wide">BusAura</h2>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                        BusAura একটি বিশ্বস্ত অনলাইন টিকেট বুকিং প্ল্যাটফর্ম যেখানে আপনি দেশের বিভিন্ন রুটের
                        বাস টিকেট ঘরে বসে সহজেই কিনতে পারেন — দ্রুত, নিরাপদ ও ঝামেলামুক্ত।
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <a className="hover:text-yellow-400 transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-yellow-400 transition">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-yellow-400 transition">
                                Terms & Conditions
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-center gap-4 mb-2 text-green-700">
                        <span><FaInstagram className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b]
                 to-[#6228d7] text-black h-[50px] w-[50px]" /></span>
                        <span><FaFacebook className="text-[#1877F2] h-[50px] w-[50px]" /></span>
                        <span><FaPinterest className="text-[#E60023] h-[50px] w-[50px]" /></span>
                    </div>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-6"></div>

            {/* Copyright */}
            <p className="text-center text-gray-400 text-sm">
                © 2025 BusAura — All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;