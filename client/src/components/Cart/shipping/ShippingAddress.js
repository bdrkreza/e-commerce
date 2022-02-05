import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";
import { USER_ORDER_PRODUCT } from "../../../gqlOperation/mutation";
import { PaymentProcess } from "../payment/PaymentProcess";
/**
 * @author
 * @function Shipping
 **/

export const Shipping = (props) => {
  const [basket, { loading, error, data }] = useMutation(USER_ORDER_PRODUCT);
  const { cartTotal, items, totalItems, emptyCart } = useCart();
  const [shippingData, setShippingData] = useState(null);
console.log(items);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setShippingData(data);
  };
  // let cart = [];
  // items.find((id) => {
  //   console.log(id);
  //   if (id) cart.push(id.id, id.quantity);
  // });

  const handlePaymentSuccess = (paymentId) => {
    const order = {
      shipment: shippingData,
      product: items,
      price: cartTotal,
      quantity: totalItems,
      paymentId,
    };
    basket({
      variables:{
        input: {
          price: cartTotal,
          paymentId: paymentId,
          shipment: shippingData,
          quantity: totalItems,
          product: items
        }
      }
    });
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
        <PaymentProcess handlePaymentSuccess={handlePaymentSuccess} shippingData={shippingData} />
      </div>
    </div>
  );
};
