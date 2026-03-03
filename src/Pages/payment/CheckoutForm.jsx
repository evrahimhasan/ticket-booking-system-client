import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const CheckoutForm = ({ ticketId, selectedSeats, totalAmount, user }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Initialize PaymentIntent
    useEffect(() => {
        if (!totalAmount) return;

        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: totalAmount }),
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
            .catch(() => setErrorMessage("Failed to initialize payment"));
    }, [totalAmount]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);

        if (!card) {
            setErrorMessage("Card element not found");
            setLoading(false);
            return;
        }

        try {
            // Confirm Card Payment
            const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: { card },
            });

            if (error) {
                setErrorMessage(error.message);
                setLoading(false);
                return;
            }

            if (paymentIntent.status === "succeeded") {
                // 🔥 Payment success: Confirm booking on backend
                const res = await fetch("http://localhost:5000/confirm-booking", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ticketId,
                        selectedSeats,
                        userEmail: user?.email || "guest@example.com",
                        totalAmount,
                    }),
                });

                const result = await res.json();

                if (res.ok) {
                    // Redirect to success page
                    navigate("/payment-success", {
                        state: {
                            ticketId,
                            selectedSeats,
                            totalAmount,
                            userEmail: user?.email,
                        },
                    });
                } else {
                    // Seat already booked
                    setErrorMessage(result.message || "Booking failed. Seat may be already booked.");
                }
            }
        } catch (err) {
            setErrorMessage("Payment failed. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg space-y-4">
            <h2 className="text-xl font-bold mb-4">Complete Payment</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <CardElement className="p-3 border rounded-md" />
                {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

                <button
                    type="submit"
                    disabled={!stripe || loading}
                    className={`w-full py-3 text-white font-bold rounded ${loading ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"
                        }`}
                >
                    {loading ? "Processing..." : `Pay ৳${totalAmount}`}
                </button>
            </form>

            <p className="text-xs text-gray-500 mt-2">
                Maximum 4 seats can be booked per transaction. Tickets are subject to availability.
            </p>
        </div>
    );
};

export default CheckoutForm;