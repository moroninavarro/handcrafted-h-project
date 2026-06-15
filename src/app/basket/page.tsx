
"use client";

import { useCart } from "@/context/CartContext";

export default function BasketPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Basket Page</h1>

      {cart.length === 0 && <p>Your basket is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="flex gap-4 mb-4 border p-3 rounded">
          <img src={item.image} alt={item.name} width={80} />

          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>

            <button
              className="text-red-500"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h2 className="text-xl mt-4">Total: ${total}</h2>

          <div className="flex gap-4 mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={clearCart}
            >
              Clear Basket
            </button>

            <button
              className="bg-green-600 text-white px-4 py-2 rounded"
              onClick={() => {
                alert("Message sent successfully!");
                clearCart();
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}