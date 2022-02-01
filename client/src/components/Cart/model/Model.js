import React from "react";
import { Shipping } from "../shipping/ShippingAddress";
import "./model.css";
/**
 * @author
 * @function Model
 **/

export const Model = ({ setShowModal }) => {
  return (
    <>
      <div class="payment_modal">
        <div class="modal__content">
          <Shipping />
          <button onClick={() => setShowModal(false)} class="modal__close  red-text">
            &times;
          </button>
        </div>
     
      </div>
    
    </>
  );
};
