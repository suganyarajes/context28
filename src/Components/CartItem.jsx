import React from "react";
import { useCart } from "../Context/CartContext.jsx";

export default function CartItem({ item }) {
  const { removeItemFromCart, updateItemQuantity } = useCart();

  const handleRemove = () => {
    if (item.quantity === 1) {
      removeItemFromCart(item.id); // If quantity is 1, remove the item from cart
    } else {
      updateItemQuantity(item.id, item.quantity - 1); // Decrease the quantity by 1
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateItemQuantity(item.id, newQuantity);
  };

  return (
    <div className="card mb-3 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div className="row g-0">
        <div className="col-12 col-sm-6 col-md-4 ">
          <img src={item.images[0]} className="img-fluid rounded-start" alt={item.title} />
        </div>
        <div className="col-12 col-sm-6 col-md-12">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
           
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <label htmlFor={`quantity-${item.id}`} className="me-2">Quantity:</label>
                <select
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={handleQuantityChange}
                  className="form-select"
                >
                  {[1, 2, 3, 4].map((quantity) => (
                    <option key={quantity} value={quantity}>
                      {quantity}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-center mt-2">
                <p className="mb-2">${item.price}</p>
                <button className="btn btn-danger" onClick={handleRemove}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
