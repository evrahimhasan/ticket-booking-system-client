import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhyChoseUs from '../../Components/WhyChoseUs/WhyChoseUs';
import PopularRoutes from '../../Components/PopularRoutes/PopularRoutes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularRoutes></PopularRoutes>
            <WhyChoseUs></WhyChoseUs>
        </div>
    );
};

export default Home;