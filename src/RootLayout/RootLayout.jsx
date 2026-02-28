import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Banner from '../Components/Banner/Banner';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative">
                {/* Navbar ekhon Banner-er upore thakbe */}
                <Navbar />
                <Banner />

                {/* Onnano sections ekhane thakbe */}
            </div>
            <main className='flex-1 w-11/12 mx-auto my-3'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;