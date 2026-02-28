
import React from 'react';
import { IoCheckmarkCircleSharp, IoSearchCircle } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';

const BookingSteps = () => {
    const steps = [
        {
            number: 1,
            title: "Search",
            icon: <p className='text-blue-400 text-5xl'><IoSearchCircle /></p>,
            description: "Enter your starting point, destination, and travel date to explore available buses."
        },
        {
            number: 2,
            title: "Select",
            icon: <p className='text-green-400 text-5xl'><IoCheckmarkCircleSharp /></p>,
            description: "Choose your preferred bus, view seat layout, and pick your seats."
        },
        {
            number: 3,
            title: "Pay",
            icon: <p className='text-blue-400 text-5xl'><MdPayment /></p>,
            description: "Complete your booking securely using cards, mobile banking, or other payment options."
        }
    ];
    return (
        // <div className="mx-auto max-w-11/12 px-4 py-16 sm:px-6 lg:px-8">
        //     <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        //         Buy tickets in 3 easy steps
        //     </h2>

        //     <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
        //         {steps.map((step) => (
        //             <div
        //                 key={step.number}
        //                 className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        //             >
        //                 {/* Icon circle */}
        //                 <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-4xl transition-colors group-hover:bg-blue-100">
        //                     {step.icon}
        //                 </div>

        //                 {/* Title */}
        //                 <h3 className="mb-3 text-center text-xl font-semibold text-blue-700">
        //                     {step.title}
        //                 </h3>

        //                 {/* Description */}
        //                 <p className="text-center text-gray-600 leading-relaxed">
        //                     {step.description}
        //                 </p>

        //                 {/* Optional step number badge */}
        //                 <div className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-md">
        //                     {step.number}
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto text-center">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl 
                 text-gray-900 dark:text-white">
                    Buy tickets in 3 easy steps
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="
          group relative rounded-2xl 
          bg-white dark:bg-gray-800
          p-8 
          shadow-lg dark:shadow-gray-900/30 
          transition-all duration-300 
          hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl
          border border-gray-200 dark:border-gray-700
        "
                        >
                            {/* Icon circle */}
                            <div
                                className="
            mx-auto mb-6 flex h-20 w-20 items-center justify-center 
            rounded-full 
            bg-blue-100 dark:bg-blue-950/40
            text-4xl 
            text-blue-600 dark:text-blue-400
            transition-colors 
            group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50
          "
                            >
                                {step.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mb-3 text-center text-xl font-semibold 
                       text-gray-900 dark:text-blue-400">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-center leading-relaxed 
                      text-gray-600 dark:text-gray-400">
                                {step.description}
                            </p>

                            {/* Step number badge */}
                            <div
                                className="
            absolute -top-4 -right-4 
            flex h-10 w-10 items-center justify-center 
            rounded-full 
            bg-blue-600 dark:bg-blue-500 
            text-white
            text-lg font-bold 
            shadow-md dark:shadow-blue-500/30
          "
                            >
                                {step.number}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default BookingSteps;