import React from 'react'
import Home from './pages/home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/productDetails/ProductDetails';
import Cart from './pages/cart/Cart';
import AllProducts from './pages/allProducts/AllProducts';
import CardPayment from './components/cardPayment/CardPayment'

import style from './App.module.css'
import { Provider } from 'react-redux';
import store from './store/Store';
import LoginSignUp from './pages/login-signup/LoginSignUp';
import AdminLogin from './pages/admin/login/AdminLogin';
import Dashboard from './pages/admin/dashboard/Dashboard';


 const App = () => {
  return (
    <Provider store={store}>
    <div className={style.wrapper}> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/allProducts' element={<AllProducts/>}></Route>
        <Route path='/login' element={<LoginSignUp/>}></Route>
        <Route path='/checkout' element={<CardPayment/>}></Route>
        <Route path='/admin/login' element={<AdminLogin/>}></Route>
        <Route path='/admin' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    </Provider>
  )
}
export default App;