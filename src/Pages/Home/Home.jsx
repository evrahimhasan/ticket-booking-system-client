import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhyChoseUs from '../../Components/WhyChoseUs/WhyChoseUs';
import PopularRoutes from '../../Components/PopularRoutes/PopularRoutes';
import BookingSteps from '../../Components/BookingSteps';


const Home = () => {
    return (
        <div>

            {/* Banner only Home page */}
            <Banner />
            <div className='w-11/12 mx-auto my-3'>

                <BookingSteps />
                <PopularRoutes />
                <WhyChoseUs />
            </div>

        </div>
    );
};

export default Home;