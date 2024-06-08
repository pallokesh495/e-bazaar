import React, { useState, useEffect } from 'react';
import styles from  './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Simulated data
      const productsData = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
      ];
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className={styles.productListContainer}>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            Product: {product.name}, Price: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
