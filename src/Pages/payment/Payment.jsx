import { useLocation, useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
    const { id } = useParams();
    const location = useLocation();
    const { selectedSeats, totalAmount } = location.state;

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm
                ticketId={id}
                selectedSeats={selectedSeats}
                totalAmount={totalAmount}
            />
        </Elements>
    );
};

export default Payment;