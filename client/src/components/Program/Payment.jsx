import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-hot-toast";

const cardStyle = {
  style: {
    base: {
      color: "white",
      fontSize: "20px",
      "::placeholder": {
        color: "#a0aec0",
      },
    },
    invalid: {
      color: "#e53e3e",
      iconColor: "#e53e3e",
    },
  },
};

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentComponent = ({ id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const { handleRequest } = useAxios();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.token) return;

    setLoading(true);
    setLoading(true);

    if (!stripe || !elements) {
      setError("Stripe is not properly loaded.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const response = await handleRequest({
      method: "post",
      url: `payment/${id}`,
      data: {
        paymentMethodId: paymentMethod.id,
      },
      token: user?.token,
    });


    toast.success("purchased successfully");
    setLoading(false);
  };

  return (
    <div id="payment-card">
      <form onSubmit={handleSubmit}>
        <CardElement options={cardStyle} />
        <button type="submit" disabled={loading}>
          {loading ? "Processing" : "Pay"}
        </button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
};

const Payment = ({ id }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentComponent id={id} />
    </Elements>
  );
};

export default Payment;
