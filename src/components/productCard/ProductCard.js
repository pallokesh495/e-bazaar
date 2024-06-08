import {useState} from 'react';
import { Link } from 'react-router-dom';
import product1 from '../../assets/product2.png';
import styles from './ProductCard.module.css';
import { useDispatch } from 'react-redux';




const ProductCard = ({ item }) => {

const dispatch = useDispatch();
const [showNotification, setShowNotification] = useState(false);


setTimeout(() => {
  setShowNotification(false);
}, 2000); 





const handleItem = ()=>{
dispatch({type:'ADD-ITEM', payload:item})
setShowNotification(true);
}

  return (
   <> 
      {
        showNotification &&(
          <div class="alert alert-success position-fixed" role="alert" style={{"z-index":"100","top":"50%","padding":"3rem","border-left":"1rem solid #004D40"}}>
        Item Added to cart Successfully!
    </div>
        )
      }
    <div className={styles.card}>
      <Link to={`/product/${item.id}`}  style={{"text-decoration":"none", "color":"#004D40  "}}>
      { <img src={product1} alt={item.name} /> }
      <div className={styles.cardInfo}>
        <h3>{item.name}</h3>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>Price: ${item.price}</p>
        </div>
        </Link>
        <div className={styles.addBtn} onClick={handleItem}>Add to cart</div>
        
      
      
    </div></>
    
  );
}

export default ProductCard;
