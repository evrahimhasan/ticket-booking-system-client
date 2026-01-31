import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import TicketBooking from "../Components/TicketBooking/TicketBooking";
import DashBoardLayout from "../dashboardLayout/DashBoardLayout";
import MainDashBoard from "../Pages/DashBoard/MainDashBoard";
import AddTicket from "../Pages/DashBoard/AddTicket";
import ManageTickets from "../Pages/DashBoard/ManageTickets";
import Ticket from "../Components/Ticket";

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
            {
                path: '/ticket',
                Component: Ticket
            }
        ]
    },
    {
        path: "dashboard",
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                Component: MainDashBoard
            },
            {
                path: '/dashboard/add-ticket',
                Component: AddTicket
            },
            {
                path: '/dashboard/manage-ticket',
                Component: ManageTickets
            }
        ]
    }
]);
export default router;