import React, { useState } from "react";
import { useCart } from "react-use-cart";
import "./cart.css";
import { CartItem } from "./CartItem";
import Checkout from "./Checkout";

/**
 * @author
 * @function AddToCart
 **/

export const SoppingCart = (props) => {
  const [checkout, setCheckout] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const { isEmpty, items, cartTotal, removeItem } = useCart();

  if (isEmpty) {
    return (
      <div className="card-panel red-text">
        <h1>Your cart is empty</h1>
      </div>
    );
  }

  if (checkout) {
    return (
      <div className="container">
        <Checkout />
        <button
          className="btn red cancel_btn"
          onClick={() => setCheckout(false)}
        >
          cancel
        </button>
      </div>
    );
  }
  return (
    <div>
      <div className="row">
        <div className="col s12 m12 l7">
          <div className="card blue-grey darken-0">
            {items?.map((item) => (
              <CartItem item={item} removeItem={removeItem} />
            ))}

            <div className="card-action">
              <a href="#">Continue shopping</a>
            </div>
          </div>
        </div>
        <div className="col l5">
          <div className="row">
            <div className="col s12 m12">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <div>
                    <p>Total-item</p>
                    <p>shipping</p>
                    <p>Total+(tax)</p>
                  </div>
                  <div>
                    <p>{cartTotal}</p>
                    <p>500</p>
                    <p>{cartTotal}</p>
                  </div>
                </div>
                <div className="card-action">
                  {jwt ? (
                    <button className="btn" onClick={() => setCheckout(true)}>
                      checkout
                    </button>
                  ) : (
                    <span className=" card-panel red white-text">
                      Please login to checkout
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};