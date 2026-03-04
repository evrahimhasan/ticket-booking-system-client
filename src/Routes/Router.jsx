import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashBoardLayout from "../dashboardLayout/DashBoardLayout";
import MainDashBoard from "../Pages/DashBoard/MainDashBoard";
import AddTicket from "../Pages/DashBoard/AddTicket";
import ManageTickets from "../Pages/DashBoard/ManageTickets";
import Ticket from "../Components/Ticket";
import SeatSelection from "../Components/SeatSelection";
import AllUser from "../Pages/DashBoard/AllUser";
import AboutUs from "../Pages/AboutUs";
import Payment from "../Pages/payment/Payment";
import PaymentSuccess from "../Pages/payment/PaymentSuccess";
import MyTicket from "../Pages/MyTicket";
import Error404 from "../Pages/errorpage/Error404";

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
                path: 'about-us',
                Component: AboutUs
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
                path: '/tickets',
                Component: Ticket
            },
            {
                path: "/my-tickets",
                Component: MyTicket
            },
            {
                path: '/seat/:id',
                Component: SeatSelection
            },
            {
                path: '/payment/:id',
                Component: Payment
            },
            {
                path: "/payment-success",
                Component: PaymentSuccess
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
            },
            {
                path: '/dashboard/all-user',
                Component: AllUser
            }
        ]
    },
    {
        path: '/*',
        element: <Error404></Error404>
    }
]);
export default router;