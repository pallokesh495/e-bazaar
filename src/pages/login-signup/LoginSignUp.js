// LoginSignUp.js
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Form from '../../components/form/Form';
import Footer from '../../components/footer/Footer';
import styles from './LoginSignUp.module.css'; 

const LoginSignUp = () => {

  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'signup'



  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <Header />
      
      <div className={styles.content}>
      <Form  activeTab={activeTab} onTabChange={handleTabChange}  />
      </div>
      
      <Footer className={styles.footer}/>
    </div>
  );
};

export default LoginSignUp;
