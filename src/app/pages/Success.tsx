
import { useNavigate } from "react-router-dom";

export function Success() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-emerald-500">

      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md">

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          ✅ Order Placed!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your order.
          Our kitchen is preparing your delicious food 🍽️
        </p>

        <button
          onClick={() => navigate("/menu")}
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition"
        >
          Back to Menu
        </button>

      </div>

    </div>

  );

}