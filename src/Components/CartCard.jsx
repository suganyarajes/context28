import React from "react";
import { useCart } from "../contexts/CartContext";
import Accordian from "./Accordian";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

export default function CartCard({ data }) {
  const { updateItemQuantity, removeItemFromCart } = useCart();

  const handleRemove = () => {
    removeItemFromCart(data.id);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateItemQuantity(data.id, newQuantity);
  };

  return (
    <div className="row mb-3">
      <div className="col-6">
        <div className="row">
          <div className="col-3">
            <img
              className="product_image"
              src={data.images[0]}
              alt={data.title}
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-9">
            <h4 className="mb-4 mt-4">{data.title}</h4>
            <Accordian
              options={[
                {
                  title: "Details & Care",
                  description: data.description,
                },
                {
                  title: "Brand",
                  description: `Brand: ${data.brand}`,
                },
                {
                  title: "Category",
                  description: `Category: ${data.category}`,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-12">
            <div className="row d-flex justify-content-end">
              <div className="col-4">
                <select
                  defaultValue={data.quantity}
                  className="quantity_changer"
                  onChange={handleQuantityChange}
                >
                  <option value={0}>Select Quantity</option>
                  {[...Array(10).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-4">
                <h5>${data.price}</h5>
              </div>
            </div>
            <div className="row d-flex justify-content-end">
              <div className="col-4"></div>
              <div className="col-4">
                <Button type="button" color="link" onClick={handleRemove}>
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  data: PropTypes.object.isRequired,
};
