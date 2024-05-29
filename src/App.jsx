import React from "react";
import CartPage from "./Components/CartPage.jsx";
import { useCart } from "./Context/CartContext.jsx";
import { useProduct } from "./Context/ProductContext.jsx";

export default function App() {
  const { cartItems, addItemToCart } = useCart();
  const { products } = useProduct();

  // Function to calculate the total price of cart items
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>Products</h2>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-6 col-sm-4 col-md-6 col-lg-6">
                <div className="card mb-4">
                  <img src={product.images[0]} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">${product.price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => addItemToCart({ ...product, quantity: 1 })}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h2>Shopping Cart</h2>
          <CartPage cartItems={cartItems} />
          <div>
            <h4>Total: ${calculateTotal()}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
