
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


import { useNavigate } from 'react-router-dom';

import styles from './CardPayment.module.css'

// Load Stripe
const stripePromise = loadStripe('pk_test_51PD9d2SHnRRAq6ToKP89SJWU3z1EkdIQmZ7cZ1ibUmCn4OBMngPqgXg5VrW4mQbCC6iuOqZ6J9yWjYXGn3ZqRgvH00HHtArPZ4'); // Replace with your Stripe publishable key

const CardPayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location.state;
  const [result, setResult]= useState(false);
  
  useEffect(()=>{
    if(result){
      const timer = setTimeout(() => {
        navigate('/'); 
      }, 2000);
    }
  },[result])


  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Create a payment method
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        email,
      },
    });

    if (error) {
      setMessage(`Payment failed: ${error.message}`);
      return;
    }
    

    // makingg api call
    const response = await fetch('http://localhost:8080/api/payment/secure/payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency: 'usd',
        receiptEmail: email,
        description: description,
        paymentMethod: paymentMethod.id,
        name:name,
        address:address
      }),
    });

    const paymentIntent = await response.json();

    // Confirm the payment
    const confirmPayment = await stripe.confirmCardPayment(paymentIntent.client_secret, {
      payment_method: paymentMethod.id,
    });

    if (confirmPayment.error) {
      console.log(`Payment failed: ${confirmPayment.error.message}`);
    } else {
      setMessage('Payment succeeded!');
      setResult(true);
    }
  };

  return (
    <div className={styles.wrapper}>

      <h2>Checkout:</h2>
      
        <form onSubmit={handlePayment}>
        <input
        className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
         <input
         className={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         
         <input
         className={styles.input}
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
          <input
            type="text"
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.input}
          />
       
        <CardElement  className={styles.input}/>
        <div className={styles.input}>Total Amount: {amount}</div>


        
        
        
        <button type="submit" disabled={!stripe} className={styles.input}>
          Pay
        </button>
        </form>
      
      {message && <div>{message}</div>}
    </div>
  );
};

const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <CardPayment />
  </Elements>
);

export default PaymentForm;
