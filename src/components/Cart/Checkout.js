import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { BACKEND_URL } from "../../helpers/helpers";
import { STRIPE_SECRET_KEY } from "../../Stripe/api_key";

const stripePromise = loadStripe(STRIPE_SECRET_KEY);
/**
 * @author
 * @function CheckoutFrom
 **/

const CheckoutFrom = (props) => {
  const { cartTotal, items, emptyCart } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [formData, setFormData] = useState({});
  const [payBtn, setPayBtn] = useState(true);
  const [payProcess, setPayProcess] = useState(false);
  const [processDone, setProcessDone] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const makePaymentRequest = async (allFormData) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/orders`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify(allFormData),
      });
      if (res.status !== 200) throw Error("Payment failed");
      return await res.json();
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const payload = await stripe.createToken(cardElement);

    const allFormData = {
      ...formData,
      token: payload.token.id,
      amount: cartTotal,
      items: items,
    };
    setPayProcess(true);
    const data = await makePaymentRequest(allFormData);
    setPayProcess(false);
    if (data) {
      setProcessDone(true);
      setTimeout(() => {
        emptyCart();
      }, 3000);
    }
  };

  if (payProcess) {
    return <h3 className=" card-panel">Payment is Processing.....</h3>;
  }

  if (error) {
    return <h2 className=" card-panel red-text"> Payment failed</h2>;
  }

  if (processDone) {
    return (
      <h1 className=" card-panel green-text"> Payment done successfully</h1>
    );
  }

  return (
    <div class="row card-panel">
      <h4 className="cyan-text">Payment Address</h4>
      <form class="col s12" onSubmit={handleSubmit}>
        <div class="row">
          <div class="input-field col s12">
            <input
              type="text"
              name="address"
              onChange={handleChange}
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
              onChange={handleChange}
              class="validate"
              placeholder="Enter your city name"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              type="text"
              name="state"
              onChange={handleChange}
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
              onChange={handleChange}
              class="validate"
              placeholder="Enter your city pin code"
              required
            />
          </div>
        </div>
        <h6 className="cyan-text">Master Card Address</h6>
        <CardElement
          onChange={(e) => {
            if (e.complete) {
              setPayBtn(false);
            } else {
              setPayBtn(true);
            }
          }}
        />
        <br />
        <button
          className="blue btn"
          type="submit"
          disabled={!stripe || !elements || payBtn}
        >
          {payProcess ? "waiting..." : "Pay"}
        </button>
      </form>
    </div>
  );
};

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutFrom />
    </Elements>
  );
};

export default Checkout;
