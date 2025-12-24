import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <main className='flex-1 w-11/12 mx-auto my-3'>
                <Outlet></Outlet>
            </main>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default RootLayout;