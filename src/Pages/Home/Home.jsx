import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhyChoseUs from '../../Components/WhyChoseUs/WhyChoseUs';
import PopularRoutes from '../../Components/PopularRoutes/PopularRoutes';
import BookingSteps from '../../Components/BookingSteps';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <BookingSteps></BookingSteps>
            <PopularRoutes></PopularRoutes>
            <WhyChoseUs></WhyChoseUs>
        </div>
    );
};

export default Home;