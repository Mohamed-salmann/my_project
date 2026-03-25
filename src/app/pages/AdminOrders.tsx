import { useEffect, useState } from "react";

export default function AdminOrders() {

  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(data);

  }, []);

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        👨‍🍳 Kitchen Orders
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">

        {orders.map((order, i) => (

          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-6 flex justify-between items-center"
          >

            <div>
              <p className="font-bold">
                Order #{i + 1}
              </p>

              <p className="text-gray-500">
                {order.items} Items
              </p>
            </div>

            <span className="bg-yellow-400 text-white px-4 py-2 rounded-full">
              Preparing
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}