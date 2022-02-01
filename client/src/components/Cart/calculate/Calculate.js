import React from "react";

/**
 * @author
 * @function Calculate
 **/

export const Calculate = ({  cartTotal }) => {
  return (
    <div className="container card card-body">
      <div class="order_price">
        <p>Order summary</p>
        <h4>$400</h4>
      </div>
      <div class="order_service">
        <p>Additional Service</p>
        <h4>$10</h4>
      </div>
      <hr />
      <div class="order_total card-panel cyan">
        <p>Total Amount</p>
        <h4>${cartTotal}</h4>
      </div>
    </div>
  );
};
