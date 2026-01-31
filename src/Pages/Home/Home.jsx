import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhyChoseUs from '../../Components/WhyChoseUs/WhyChoseUs';
import PopularRoutes from '../../Components/PopularRoutes/PopularRoutes';
import BookingSteps from '../../Components/BookingSteps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookingSteps></BookingSteps>
            <PopularRoutes></PopularRoutes>
            <WhyChoseUs></WhyChoseUs>
        </div>
    );
};

export default Home;