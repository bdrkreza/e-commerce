import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Calculate } from "../calculate/Calculate";
import { CartItem } from "../cartItem/CartItem";
import { Model } from "../model/Model";
import { Shipping } from "../shipping/ShippingAddress";
import "./soppingCart.css";
/**
 * @author
 * @function AddToCart
 **/

export const SoppingCart = (props) => {
  const [checkout, setCheckout] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const {
    isEmpty,
    items,
    cartTotal,
    totalItems,
    removeItem,
    updateItemQuantity,
  } = useCart();



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
        <Shipping />
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
    <div className="body">
      <div className=" card-content row ">
        <div className="col s12 m6 l6 center-align">
          <div className="title">
            <h3>Order Summary</h3>
            <h3 className="blue-grey-text">{totalItems}</h3>
          </div>
          <>
            {items?.map((item) => (
              <CartItem
                item={item}
                removeItem={removeItem}
                updateItemQuantity={updateItemQuantity}
              />
            ))}
          </>
        </div>

        <div className="col s12 m6 l6">
          <div className="container">
            <h3>Info</h3>
            <Calculate cartTotal={cartTotal} items={items}  />
            <div class="payment">
              <div className="add">
                <h4 class="headline-primary">Payment</h4>

                <button
                  onClick={() => setShowModal(true)}
                  className="btn large check_btn"
                >
                  Checkout
                </button>
                {showModal ? <Model setShowModal={setShowModal} /> : null}
              </div>
              <div class="ux-card" onClick={() => setShowModal(true)}>
                <a>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                    height="32"
                    alt="img"
                  />
                  <img
                    src="https://www.sslcommerz.com/wp-content/uploads/2020/07/sslcom-pso.png"
                    height="32"
                    alt="img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
