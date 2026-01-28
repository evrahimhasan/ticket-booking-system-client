import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import TicketBooking from "../Components/TicketBooking/TicketBooking";
import DashBoardLayout from "../dashboardLayout/DashBoardLayout";
import MainDashBoard from "../Pages/DashBoard/MainDashBoard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/search-ticket',
                Component: TicketBooking
            },
        ]
    },
    {
        path: "dashboard",
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                Component: MainDashBoard
            }
        ]
    }
]);
export default router;