import React from 'react';

const TicketBooking = () => {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://i.ibb.co/84x7XCnm/79fc65573c42cd2a8e5479f041e9f826.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

            {/* Headline */}
            <div className="relative z-20 text-white space-y-3 animate-fadeSlide">
                <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
                    অনলাইন টিকেট বুকিং এখন সহজ!
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                    ঘরে বসেই সহজে কিনুন আপনার টিকেট।
                </p>
            </div>

            {/* Search Box */}
            <div className="relative z-20 bg-teal-400/90 backdrop-blur-md p-6 mt-10 rounded-2xl shadow-2xl w-[90%] max-w-3xl animate-scaleIn">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-white mb-1 font-medium">
                            Leaving From
                        </label>
                        <select className="p-2 rounded bg-white focus:outline-none">
                            <option>From</option>
                            <option>Mymensingh</option>
                            <option>Sherpur</option>
                            <option>Netrokuna</option>
                            <option>Jamalpur</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white mb-1 font-medium">
                            Going To
                        </label>
                        <select className="p-2 rounded bg-white focus:outline-none">
                            <option>To</option>
                            <option>Dhaka</option>
                            <option>Gazipur</option>
                            <option>Chottogram</option>
                            <option>Cox's Bazar</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white mb-1 font-medium">
                            Departing On
                        </label>
                        <input
                            type="date"
                            className="p-2 rounded bg-white focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white mb-1 font-medium">
                            Coach Type
                        </label>
                        <select className="p-2 rounded bg-white focus:outline-none">
                            <option>All</option>
                            <option>Non-AC</option>
                            <option>AC</option>
                            <option>Sleeper</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="col-span-1 md:col-span-2 bg-yellow-400 hover:bg-blue-600 hover:text-white text-black font-bold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                        SEARCH
                    </button>
                </form>
            </div>

            {/* Custom Animations */}
            <style>
                {`
          @keyframes fadeSlide {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fadeSlide {
            animation: fadeSlide 1.2s ease-out forwards;
          }

          .animate-scaleIn {
            animation: scaleIn 0.8s ease-out forwards;
          }
        `}
            </style>
        </section>
        // <section
        //     className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center"
        //     style={{
        //         backgroundImage:
        //             "url('https://i.ibb.co/84x7XCnm/79fc65573c42cd2a8e5479f041e9f826.jpg')",
        //     }}
        // >
        //     {/* Overlay */}
        //     <div className="absolute inset-0 bg-black/40"></div>

        //     {/* Headline */}
        //     <div className="relative z-20 text-white space-y-2">
        //         <h1 className="text-4xl md:text-5xl font-bold">
        //             অনলাইন টিকেট বুকিং এখন সহজ!
        //         </h1>
        //         <p className="text-lg md:text-xl">
        //             ঘরে বসেই সহজে কিনুন আপনার টিকেট।
        //         </p>
        //     </div>

        //     {/* Search Box */}
        //     <div className="relative z-20 bg-teal-400 p-6 mt-8 rounded-xl shadow-lg w-[90%] max-w-3xl">
        //         <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        //             <div className="flex flex-col">
        //                 <label className="text-white mb-1 font-medium">
        //                     Leaving From
        //                 </label>
        //                 <select className="p-2 rounded bg-white focus:outline-none">
        //                     <option>From</option>
        //                     <option>Mymensingh</option>
        //                     <option>Sherpur</option>
        //                     <option>Netrokuna</option>
        //                     <option>Jamalpur</option>
        //                 </select>
        //             </div>

        //             <div className="flex flex-col">
        //                 <label className="text-white mb-1 font-medium">
        //                     Going To
        //                 </label>
        //                 <select className="p-2 rounded bg-white focus:outline-none">
        //                     <option>To</option>
        //                     <option>Dhaka</option>
        //                     <option>Gazipur</option>
        //                     <option>Chottogram</option>
        //                     <option>Cox's Bazar</option>
        //                 </select>
        //             </div>

        //             <div className="flex flex-col">
        //                 <label className="text-white mb-1 font-medium">
        //                     Departing On
        //                 </label>
        //                 <input
        //                     type="date"
        //                     className="p-2 rounded bg-white focus:outline-none"
        //                 />
        //             </div>

        //             <div className="flex flex-col">
        //                 <label className="text-white mb-1 font-medium">
        //                     Coach Type
        //                 </label>
        //                 <select className="p-2 rounded bg-white focus:outline-none">
        //                     <option>All</option>
        //                     <option>Non-AC</option>
        //                     <option>AC</option>
        //                     <option>Sleeper</option>
        //                 </select>
        //             </div>

        //             <button
        //                 type="submit"
        //                 className="col-span-1 md:col-span-2 bg-yellow-400 hover:bg-blue-600 hover:text-white text-black font-bold py-3 rounded transition duration-300"
        //             >
        //                 SEARCH
        //             </button>
        //         </form>
        //     </div>
        // </section>
    );
};

export default TicketBooking;