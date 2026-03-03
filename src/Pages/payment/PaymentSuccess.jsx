import { useLocation, useNavigate } from "react-router";

const PaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { ticketId, selectedSeats, totalAmount } = location.state || {};

    if (!ticketId) {
        // Direct visit এ home redirect
        navigate("/");
        return null;
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 p-6">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md space-y-4">
                <h1 className="text-3xl font-bold text-green-600">🎉 Payment Successful!</h1>
                <p className="text-gray-700">
                    Your seats <span className="font-semibold">{selectedSeats.join(", ")}</span> are booked.
                </p>
                <p className="text-gray-500">Total Paid: ৳{totalAmount}</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;