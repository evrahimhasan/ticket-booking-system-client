import { useLocation, useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
    const { id } = useParams();
    const location = useLocation();
    const { selectedSeats, totalAmount } = location.state;
    const { user } = use(AuthContext)

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm
                ticketId={id}
                selectedSeats={selectedSeats}
                totalAmount={totalAmount}
                user={user}
            />
        </Elements>
    );
};

export default Payment;