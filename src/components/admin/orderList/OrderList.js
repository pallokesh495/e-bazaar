import React, { useState, useEffect } from 'react';
import styles from './OrderList.module.css';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulated data
    const ordersData = [
      { id: 1, status: 'Pending' },
      { id: 2, status: 'Shipped' },
      { id: 3, status: 'Delivered' }
    ];
    setOrders(ordersData);
  }, []);

  return (
    <div className={styles.orderListContainer}>
      <h2>Order List</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
