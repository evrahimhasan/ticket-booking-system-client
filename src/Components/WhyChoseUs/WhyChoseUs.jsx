import React from 'react';
import { FaBus, FaClock, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const WhyChoseUs = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 text-center">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why Choose <span className="text-yellow-500">BusAura</span>?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    BusAura আপনাকে দেয় সহজ, দ্রুত ও নিরাপদ অনলাইন বাস টিকেট বুকিং অভিজ্ঞতা।
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaBus className="text-4xl text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Verified Operators</h3>
                        <p className="text-gray-600 text-sm">
                            নির্ভরযোগ্য ও যাচাইকৃত বাস অপারেটরের সাথে নিশ্চিন্ত ভ্রমণ।
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaShieldAlt className="text-4xl text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                        <p className="text-gray-600 text-sm">
                            ১০০% নিরাপদ অনলাইন পেমেন্ট গেটওয়ে।
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaClock className="text-4xl text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Real-Time Booking</h3>
                        <p className="text-gray-600 text-sm">
                            লাইভ সিট অ্যাভেইলেবিলিটি ও তাৎক্ষণিক কনফার্মেশন।
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaMobileAlt className="text-4xl text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
                        <p className="text-gray-600 text-sm">
                            মোবাইল, ট্যাব ও ডেস্কটপে সমানভাবে সহজ ব্যবহার।
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChoseUs;