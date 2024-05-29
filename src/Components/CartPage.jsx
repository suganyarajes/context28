import React from "react";
import { useCart } from "../Context/CartContext.jsx";
import CartItem from "./CartItem";

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="cart-items-container py-5 divider">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
