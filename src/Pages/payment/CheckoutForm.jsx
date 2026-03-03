import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const CheckoutForm = ({ ticketId, selectedSeats, totalAmount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        if (totalAmount <= 0) return;

        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: totalAmount }),
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [totalAmount]);

    if (!stripe || !elements || !clientSecret) {
        return <p className="text-center py-10">Loading payment...</p>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const card = elements.getElement(CardElement);

        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: { card }
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {
            await fetch("http://localhost:5000/confirm-booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ticketId, selectedSeats })
            });
            alert("Payment Successful & Booking Confirmed!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
            <CardElement className="mb-4 p-3 border rounded" />
            <button
                type="submit"
                disabled={selectedSeats.length === 0}
                className="w-full py-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600"
            >
                Pay ৳{totalAmount}
            </button>
        </form>
    );
};

export default CheckoutForm;