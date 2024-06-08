import React, { useState, useEffect } from 'react';
import styles from  './PaymentList.module.css';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Simulated data
    const paymentsData = [
      { id: 1, amount: 100 },
      { id: 2, amount: 200 },
      { id: 3, amount: 300 }
    ];
    setPayments(paymentsData);
  }, []);

  return (
    <div className={styles.paymentListContainer}>
      <h2>Payment List</h2>
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>
            Amount: ${payment.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
