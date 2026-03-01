import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;