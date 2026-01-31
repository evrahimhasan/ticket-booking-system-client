import React, { useEffect } from 'react';
import { NavLink } from 'react-router';

const Banner = () => {

    useEffect(() => {
        const slides = ['slide1', 'slide2', 'slide3'];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % slides.length;
            document.getElementById(slides[index])?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start'
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="mt-5">
            <div className="carousel w-full rounded-2xl overflow-hidden">

                {/* SLIDE 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/rfXFMWD9/1c015d03-12c7-4cc2-b97d-0067982ef3f4.jpg"
                        className="w-full h-[500px] object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 
                          flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
                            Book Your Bus Tickets Instantly!
                        </h1>
                        <p className="text-white mt-3 text-lg max-w-2xl opacity-90">
                            Find the best routes, compare schedules, and secure your seat in seconds for a hassle-free journey.
                        </p>
                        <NavLink to="/search-ticket">
                            <button className="mt-6 px-8 py-3 rounded-2xl bg-teal-500 text-white font-semibold 
                                 shadow-xl hover:bg-teal-600 transition transform hover:-translate-y-1">
                                Get Your First Ticket
                            </button>
                        </NavLink>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* SLIDE 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/kg5dhSg4/29a6ae36-fe34-417c-bf66-14913ef83e62.jpg"
                        className="w-full h-[500px] object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 
                          flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
                            Travel Smart, Book Easy
                        </h1>
                        <p className="text-white mt-3 text-lg max-w-2xl opacity-90">
                            Choose from thousands of buses, get real-time availability, and enjoy seamless online booking anytime.
                        </p>
                        <NavLink to="/search-ticket">
                            <button className="mt-6 px-8 py-3 rounded-2xl bg-teal-500 text-white font-semibold 
                                 shadow-xl hover:bg-teal-600 transition transform hover:-translate-y-1">
                                Get Your First Ticket
                            </button>
                        </NavLink>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* SLIDE 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/DDPnh44C/cdf12846-56c8-455d-a853-50e2ecd24c59.jpg"
                        className="w-full h-[500px] object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 
                          flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
                            Your Journey Starts Here!
                        </h1>
                        <p className="text-white mt-3 text-lg max-w-2xl opacity-90">
                            Discover affordable bus tickets, reliable operators, and convenient departures to any destination.
                        </p>
                        <NavLink to="/search-ticket">
                            <button className="mt-6 px-8 py-3 rounded-2xl bg-teal-500 text-white font-semibold 
                                 shadow-xl hover:bg-teal-600 transition transform hover:-translate-y-1">
                                Get Your First Ticket
                            </button>
                        </NavLink>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>



        // <div className="mt-5">
        //     <div className="carousel w-full rounded-2xl overflow-hidden">

        //         {/* SLIDE 1 */}
        //         <div id="slide1" className="carousel-item relative w-full">
        //             <img
        //                 src="https://i.ibb.co.com/rfXFMWD9/1c015d03-12c7-4cc2-b97d-0067982ef3f4.jpg"
        //                 className="w-full h-[500px] object-cover"
        //             />


        //             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        //                 <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
        //                     Book Your Bus Tickets Instantly!
        //                 </h1>
        //                 <p className="text-white mt-2 text-lg">
        //                     Find the best routes, compare schedules, and secure your seat in seconds for a hassle-free journey.
        //                 </p>
        //                 <NavLink to="/search-ticket">
        //                     <button className="mt-4 px-6 py-3 rounded-2xl bg-teal-400/90 text-white font-semibold shadow-lg hover:bg-red-700 transition transform hover:-translate-y-1">
        //                         Get Your First Ticket
        //                     </button>
        //                 </NavLink>
        //             </div>

        //             <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
        //                 <a href="#slide3" className="btn btn-circle">❮</a>
        //                 <a href="#slide2" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>

        //         {/* SLIDE 2 */}
        //         <div id="slide2" className="carousel-item relative w-full">
        //             <img
        //                 src="https://i.ibb.co.com/kg5dhSg4/29a6ae36-fe34-417c-bf66-14913ef83e62.jpg"
        //                 className="w-full h-[500px] object-cover"
        //             />

        //             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        //                 <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
        //                     Travel Smart, Book Easy
        //                 </h1>
        //                 <p className="text-white mt-2 text-lg">
        //                     Choose from thousands of buses, get real-time availability, and enjoy seamless online booking anytime.
        //                 </p>
        //                 <NavLink to="/search-ticket">
        //                     <button className="mt-4 px-6 py-3 rounded-2xl bg-teal-400/90 text-white font-semibold shadow-lg hover:bg-red-700 transition transform hover:-translate-y-1">
        //                         Get Your First Ticket
        //                     </button>
        //                 </NavLink>
        //             </div>

        //             <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
        //                 <a href="#slide1" className="btn btn-circle">❮</a>
        //                 <a href="#slide3" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>

        //         {/* SLIDE 3 */}
        //         <div id="slide3" className="carousel-item relative w-full">
        //             <img
        //                 src="https://i.ibb.co.com/DDPnh44C/cdf12846-56c8-455d-a853-50e2ecd24c59.jpg"
        //                 className="w-full h-[500px] object-cover"
        //             />

        //             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        //                 <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
        //                     Your Journey Starts Here!
        //                 </h1>
        //                 <p className="text-white mt-2 text-lg">
        //                     Discover affordable bus tickets, reliable operators, and convenient departures to any destination.
        //                 </p>
        //                 <NavLink to="/search-ticket">
        //                     <button className="mt-4 px-6 py-3 rounded-2xl bg-teal-400/90 text-white font-semibold shadow-lg hover:bg-red-700 transition transform hover:-translate-y-1">
        //                         Get Your First Ticket
        //                     </button>
        //                 </NavLink>
        //             </div>

        //             <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
        //                 <a href="#slide2" className="btn btn-circle">❮</a>
        //                 <a href="#slide1" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>

        //     </div>
        // </div>
    );
};

export default Banner;