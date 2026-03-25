import { useEffect, useState } from "react";

export default function Orders() {

  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(data);

  }, []);

  return (

    <div className="min-h-screen p-10 bg-gray-50">

      <h1 className="text-4xl font-bold mb-8 text-center">
        📦 Your Orders
      </h1>

      <div className="max-w-2xl mx-auto space-y-4">

        {orders.map((order, i) => (

          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-5 flex justify-between"
          >

            <div>
              <p className="font-semibold">
                Order #{i + 1}
              </p>
              <p className="text-gray-500">
                {order.items} items
              </p>
            </div>

            <div className="font-bold text-orange-500">
              RM {order.total}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}