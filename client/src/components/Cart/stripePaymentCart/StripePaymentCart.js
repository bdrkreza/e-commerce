import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import "./paymentCart.css";

const cardStyle = {
  style: {
    base: {
      color: "#000",
      fontFamily: "Roboto, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#606060",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

/**
 * @author
 * @function StripePaymentCart
 **/

export const StripePaymentCart = ({ handlePaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [Success, setSuccess] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    console.log("[PaymentMethod]", paymentMethod);

    if (error) {
      setProcessing(true);
      setSuccess(null);
    } else {
      setSuccess(paymentMethod.id);
      handlePaymentSuccess(paymentMethod.id);
      setProcessing(false);
    }
  };

  const cardHandleChange = (event) => {
    const { error } = event;
    setError(error ? error.message : "");
    setProcessing(error ? error.message : "");
  };
  return (
    <div>
      {Success ? "success" : null}
      <div className="center-align card chip cyan body">
        <h3 className="">Payment card</h3>
        <div className="cart_container">
          <div class="shine"></div>
          <div class="shine shine-layer-two"></div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="name">
                <input class="validate" placeholder="John Smith" type="text" />
              </div>
            </div>
            <div class="card_number">
              <label>Card number</label>
              <div className="stripe-card">
                <CardNumberElement
                  options={cardStyle}
                  onChange={cardHandleChange}
                />
              </div>
            </div>
            <div class="date">
              <div>
                <label>Expiration date</label>
                <div className="stripe-card">
                  <CardExpiryElement
                    className="card-element"
                    options={cardStyle}
                    onChange={cardHandleChange}
                  />
                </div>
              </div>

              <div>
                <label>CVC code</label>
                <div className="stripe-card">
                  <CardCvcElement
                    className="card-element"
                    options={cardStyle}
                    onChange={cardHandleChange}
                  />
                </div>
              </div>
            </div>
            {error ? <div className="card #ffcdd2 red lighten-4 red-text">{error}</div> : null}
            <div>
              <button
                disabled={processing}
                type="submit"
                class="btn large cart_btn"
              >
                {processing && (
                  <div className="">
                    <div class="progress">
                      <div class="indeterminate"></div>
                    </div>
                  </div>
                )}

                <div className="svg">
                  {Success && (
                    <>
                      <svg
                        class="fill-current"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                      </svg>
                    </>
                  )}

                  {!processing && (
                    <span>
                      Pay<i class="material-icons right">send</i>
                    </span>
                  )}
                </div>
              </button>
              <img src="https://img.icons8.com/color/48/000000/visa.png" />
            </div>
          </form>
          <div class="shine"></div>
          <div class="shine shine-layer-two"></div>
        </div>
      </div>
    </div>
  );
};
