
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StripePaymentCart } from '../stripePaymentCart/StripePaymentCart';


const stripePromise = loadStripe('pk_test_51IeCtgImkxV9DawVFBMNpm2dLoC7s8dMfvev1EJZTN85joEUoXua99KMbY0cOlcljaQGyiPTfkhEVomIkPZChmfQ001GN9Y5Ei');


/**
 * @author
 * @function PaymentProcess
 **/

export const PaymentProcess = ({handlePaymentSuccess}) => {

  return (
    <div>
         <Elements stripe={stripePromise}>
                <StripePaymentCart handlePaymentSuccess={handlePaymentSuccess} />
            </Elements>
    </div>
  );
};
