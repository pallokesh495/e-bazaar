import React, { useState } from 'react';
import styles from './Dashboard.module.css'; // Import CSS module
import ProductList from '../../../components/admin/productList/ProductList';
import UserList from '../../../components/admin/userList/UserList';
import PaymentList from '../../../components/admin/paymentList/PaymentList';
import OrderList from '../../../components/admin/orderList/OrderList';
import CreateProductForm from '../../../components/admin/createProduct/CreateProductForm';

const Dashboard = () => {
    const [main, setMain] = useState(<ProductList/>)

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <ul>
          <li onClick={()=>{setMain(<UserList/>)}}>Users</li>
          <li onClick={()=>{setMain(<CreateProductForm/>)}}>Create product</li>
          <li onClick={()=>{setMain(<ProductList/>)}}>Products</li>
          <li onClick={()=>{setMain(<PaymentList/>)}}>Payments</li>
          <li onClick={()=>{setMain(<OrderList/>)}}>Orders</li>
        </ul>
      </div>
      <div className={styles.mainContent}>
        {main}
      </div>
    </div>
  );
};

export default Dashboard;
