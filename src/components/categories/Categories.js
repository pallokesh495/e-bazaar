import React from 'react'
import grocery from '../../assets/grocery.png'
import styles from '../categories/Categories.module.css'
 const Categories = () => {

    
  return (
    <div className={styles.wrapper}>
    <tab>
         <img src={grocery} alt=''/>
         <div>Groceries</div>
    </tab>
    <tab>
         <img src={grocery} alt=''/>
         <div>Groceries</div>
    </tab>
    <tab>
         <img src={grocery} alt=''/>
         <div>Groceries</div>
    </tab>
    <tab>
         <img src={grocery} alt=''/>
         <div>Groceries</div>
    </tab>
    <tab>
         <img src={grocery} alt=''/>
         <div>Groceries</div>
    </tab>
    
    </div>
  )
}
export default Categories;