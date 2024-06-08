import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';





import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import style from './Cart.module.css';

const Cart = () => {
  const cartStore = useSelector((state) => state);
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState([]);
  
  
  useEffect(() => {
    setCartItems(cartStore);
  }, [cartStore]);

  const handleCart = (id) => {
    dispatch({ type: 'REMOVE-ITEM', payload: id });
  };

  const handleQuantity = (id, action) => {
    if (action === '+') dispatch({ type: 'ADD-QUANTITY', payload: id });
    if (action === '-') dispatch({ type: 'SUBTRACT-QUANTITY', payload: id });
  };

  let totalAmount = 0;
  cartItems.map((item)=>{
    totalAmount = totalAmount + (item.price *item.quantity)
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div className={style.wrapper}>
        <h2>Cart Items:</h2>
        <hr className={style.line} />
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Sub-Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {
             
            cartItems.map((item, key) => (
              
              <tr key={key}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <AddCircleIcon
                    style={{ margin: '0 1rem' }}
                    onClick={() => {
                      handleQuantity(item.id, '+');
                    }}
                  />
                  {item.quantity}
                  <RemoveCircleIcon
                    style={{ margin: '0 1rem' }}
                    onClick={() => {
                      handleQuantity(item.id, '-');
                    }}
                  />
                </td>
                <td>{item.price * item.quantity}</td>
                <td onClick={() => handleCart(item.id)}>
                  <DeleteRoundedIcon className={style.deleteIcon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className={style.line} />
        
          <Link to={'/'} class="btn btn-primary" style={{"float":"right"}}>
            Continue Shopping
          </Link>
       
        <hr className={style.line} />
        <div className={style.final_section}>
          <h4>Subtotal: {totalAmount}</h4>
          <h4>Delivery Charges: 50</h4>
          <hr className={style.line} />
          <h4>Total:{totalAmount + 50}</h4>
          <Link to={'/checkout'} state={totalAmount+50} >
          <div className="btn btn-success">Checkout</div>
          </Link>
        </div>
      </div>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
};

export default Cart;
