import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";
import { PaymentProcess } from "../payment/PaymentProcess";
/**
 * @author
 * @function Shipping
 **/

export const Shipping = (props) => {
  const { cartTotal, items, emptyCart } = useCart();
  const [shippingData, setShippingData] = useState(null);
console.log(shippingData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setShippingData(data);
  };

  const display = {
    display: 'block'
  };
  const hide = {
    display: 'none'
  };

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      shipment: shippingData,
      price: cartTotal,
      product: items,
      paymentId,
    };
  };
  return (
    <div className="container row">
      <div
        className="col m6"
        style={{ display: shippingData ? "none" : "block" }}
      >
        <div className="card-panel chip card-body body center-align">
          <h3 className="center-align">Shipping Address</h3>
          <form class="col s12 blue-grey" onSubmit={handleSubmit(onSubmit)}>
            <div class="row">
              <div class="input-field col s12">
                <input
                  type="text"
                  name="address"
                  {...register("address", { required: true })}
                  class="validate"
                  placeholder="Enter Your address"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  type="text"
                  name="city"
                  {...register("city", { required: true })}
                  class="validate"
                  placeholder="Enter your city name"
                  required
                />
                {errors.city && <span>This field is required</span>}
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  type="text"
                  name="state"
                  {...register("state", { required: true })}
                  class="validate"
                  placeholder="Enter your state name"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  type="text"
                  name="pin"
                  {...register("pin", { required: true })}
                  class="validate"
                  placeholder="Enter your city pin code"
                  required
                />
              </div>
              <button class="btn waves-effect waves-light " type="submit">
                Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        class="col-md-6"
        style={{ display: shippingData ? "block" : "none" }}
      >
        <PaymentProcess
          handlePaymentSuccess={handlePaymentSuccess}
          shippingData={shippingData}
        />
      </div>
    </div>
  );
};
