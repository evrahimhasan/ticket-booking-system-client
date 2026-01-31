import React from 'react';

const TicketBooking = () => {
    return (
        // <section
        //     className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center overflow-hidden"
        //     style={{
        //         backgroundImage:
        //             "url('https://i.ibb.co/84x7XCnm/79fc65573c42cd2a8e5479f041e9f826.jpg')",
        //     }}
        // >
        //     {/* Overlay */}
        //     <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

        //     {/* Headline */}
        //     <div className="relative z-20 text-white space-y-3 animate-fadeSlide">
        //         <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
        //             অনলাইন টিকেট বুকিং এখন সহজ!
        //         </h1>
        //         <p className="text-lg md:text-xl opacity-90">
        //             ঘরে বসেই সহজে কিনুন আপনার টিকেট।
        //         </p>
        //     </div>

        //     {/* Search Box */}
        //     <div className="relative z-20 bg-green-100 backdrop-blur-md p-6 mt-10 rounded-2xl shadow-2xl w-[90%] max-w-3xl animate-scaleIn">
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
        //                 className='col-span-1 md:col-span-2 mt-6 px-8 py-3 rounded-2xl
        //                 bg-teal-500 text-white font-semibold shadow-xl 
        //                 hover:bg-teal-600 transition transform hover:-translate-y-1'
        //             >
        //                 SEARCH
        //             </button>
        //         </form>
        //     </div>

        //     {/* Custom Animations */}
        //     <style>
        //         {`
        //   @keyframes fadeSlide {
        //     0% {
        //       opacity: 0;
        //       transform: translateY(30px);
        //     }
        //     100% {
        //       opacity: 1;
        //       transform: translateY(0);
        //     }
        //   }

        //   @keyframes scaleIn {
        //     0% {
        //       opacity: 0;
        //       transform: scale(0.95);
        //     }
        //     100% {
        //       opacity: 1;
        //       transform: scale(1);
        //     }
        //   }

        //   .animate-fadeSlide {
        //     animation: fadeSlide 1.2s ease-out forwards;
        //   }

        //   .animate-scaleIn {
        //     animation: scaleIn 0.8s ease-out forwards;
        //   }
        // `}
        //     </style>
        // </section>
        <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://i.ibb.co/84x7XCnm/79fc65573c42cd2a8e5479f041e9f826.jpg')",
            }}
        >
            {/* Adaptive Overlay */}
            <div className="absolute inset-0 
    bg-gradient-to-b 
    from-emerald-900/60 via-emerald-900/50 to-black/70
    dark:from-black/80 dark:via-black/70 dark:to-black/90">
            </div>

            {/* Headline */}
            <div className="relative z-20 text-white space-y-3 animate-fadeSlide">
                <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-2xl">
                    অনলাইন টিকেট বুকিং এখন সহজ!
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                    ঘরে বসেই সহজে কিনুন আপনার টিকেট।
                </p>
            </div>

            {/* Search Box */}
            <div className="
    relative z-20 
    mt-10 p-6 w-[90%] max-w-3xl rounded-2xl shadow-2xl
    bg-white/80 dark:bg-emerald-950/70
    backdrop-blur-xl
    border border-emerald-300/40 dark:border-emerald-500/30
    animate-scaleIn
  ">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="flex flex-col">
                        <label className="text-emerald-900 dark:text-emerald-200 mb-1 font-semibold">
                            Leaving From
                        </label>
                        <select className="
          p-2 rounded 
          bg-white dark:bg-emerald-900
          text-emerald-900 dark:text-white
          border border-emerald-300 dark:border-emerald-600
          focus:outline-none focus:ring-2 focus:ring-emerald-400
        ">
                            <option>From</option>
                            <option>Mymensingh</option>
                            <option>Sherpur</option>
                            <option>Netrokuna</option>
                            <option>Jamalpur</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-emerald-900 dark:text-emerald-200 mb-1 font-semibold">
                            Going To
                        </label>
                        <select className="
          p-2 rounded 
          bg-white dark:bg-emerald-900
          text-emerald-900 dark:text-white
          border border-emerald-300 dark:border-emerald-600
          focus:outline-none focus:ring-2 focus:ring-emerald-400
        ">
                            <option>To</option>
                            <option>Dhaka</option>
                            <option>Gazipur</option>
                            <option>Chottogram</option>
                            <option>Cox's Bazar</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-emerald-900 dark:text-emerald-200 mb-1 font-semibold">
                            Departing On
                        </label>
                        <input
                            type="date"
                            className="
            p-2 rounded 
            bg-white dark:bg-emerald-900
            text-emerald-900 dark:text-white
            border border-emerald-300 dark:border-emerald-600
            focus:outline-none focus:ring-2 focus:ring-emerald-400
          "
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-emerald-900 dark:text-emerald-200 mb-1 font-semibold">
                            Coach Type
                        </label>
                        <select className="
          p-2 rounded 
          bg-white dark:bg-emerald-900
          text-emerald-900 dark:text-white
          border border-emerald-300 dark:border-emerald-600
          focus:outline-none focus:ring-2 focus:ring-emerald-400
        ">
                            <option>All</option>
                            <option>Non-AC</option>
                            <option>AC</option>
                            <option>Sleeper</option>
                        </select>
                    </div>

                    {/* Button unchanged */}
                    <button
                        type="submit"
                        className='col-span-1 md:col-span-2 mt-6 px-8 py-3 rounded-2xl
        bg-teal-500 text-white font-semibold shadow-xl 
        hover:bg-teal-600 transition transform hover:-translate-y-1'
                    >
                        SEARCH
                    </button>
                </form>
            </div>

            {/* Animations */}
            <style>
                {`
      @keyframes fadeSlide {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      @keyframes scaleIn {
        0% { opacity: 0; transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1); }
      }

      .animate-fadeSlide {
        animation: fadeSlide 1.2s ease-out forwards;
      }

      .animate-scaleIn {
        animation: scaleIn 0.9s cubic-bezier(.2,.8,.2,1) forwards;
      }
    `}
            </style>
        </section>

    );
};

export default TicketBooking;