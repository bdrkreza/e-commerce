import React from "react";

/**
 * @author
 * @function Calculate
 **/

export const Calculate = ({ cartTotal, items }) => {
  let total = items
    .reduce(function (acc, curr) {
      return acc + curr.quantity * curr.price;
    }, 0);

  const tax = (total / 10).toFixed(2);
  const totalPrice = total + Number(tax);


  return (
    <div className="container card card-body">
      <div class="order_price">
        <p>Order summary</p>
        <h4>${total}</h4>
      </div>
      <div class="order_service">
        <p>Additional Service</p>
        <h4>$10</h4>
      </div>
      <hr />
      <div class="order_total card-panel cyan">
        <p>Total Amount</p>
        <h4>${totalPrice}</h4>
      </div>
    </div>
  );
};
