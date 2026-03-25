import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen flex items-center justify-center bg-green-50">

      <div className="bg-white shadow-xl rounded-2xl p-10 text-center">

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          ✅ Order Placed Successfully
        </h1>

        <p className="text-gray-600 mb-6">
          Your delicious food is being prepared 👨‍🍳
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600"
        >
          Back to Menu
        </button>

      </div>

    </div>
  );
}