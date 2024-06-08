import React, { useState } from 'react';
import style from './CreateProductForm.module.css'; // Import styles

const CreateProductForm = ({ createProduct }) => {
  const [product, setProduct] = useState({
    id: '',
    category: '',
    name: '',
    price: '',
    extra: '',
    description: '',
    image: null, // Initialize image as null
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0] // Set image to the selected file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(product);
    setProduct({
      id: '',
      category: '',
      name: '',
      price: '',
      extra: '',
      description: '',
      image: null,
      quantity: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className={style.productFormContainer}>
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type="text"
        name="extra"
        value={product.extra}
        onChange={handleChange}
        placeholder="Extra"
      />
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
      />
      {/* Image upload input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <input
        type="number"
        name="quantity"
        value={product.quantity}
        onChange={handleChange}
        placeholder="Quantity"
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProductForm;
