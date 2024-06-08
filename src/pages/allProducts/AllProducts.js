import {useEffect,useState} from 'react'
import axios from 'axios';


import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProductCard from '../../components/productCard/ProductCard';


import style from './AllProducts.module.css'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';






const AllProducts = () => {

const [data, setData] = useState([]);  
const [searchResults, setSearchResults] = useState([]);



useEffect(() => {
  axios.get('http://localhost:8080/all-products') 
  .then(response => {
    setData(response.data)
    setSearchResults(response.data);
   
  })
  .catch(error => {
    console.log("error in fetching data====>",error )
    
  });
  
}, []);

const handleFilter = (filterName)=>{

  const Results = data.filter((item) =>
    item.category.toLowerCase().includes(filterName.toLowerCase())   
  );

  setSearchResults(Results);
  
 
  
console.log(searchResults);
}




  return (
    <div style={{"display":"flex","flexDirection":"column","min-height":"100vh"}}>
        <Header/>
        <div className={style.wrapper}>
  <div>
    <div   className={style.filter}>
    <DropdownButton id="dropdown-basic-button" class="btn-secondary" title="Category " >
      <Dropdown.Item onClick={()=>{handleFilter("Electronics")}} >Electronics</Dropdown.Item>
      <Dropdown.Item onClick={()=>{handleFilter("Clothing")}}>Clothing</Dropdown.Item>
      <Dropdown.Item onClick={()=>{handleFilter("Home & Kitchen")}}>Home & Kitchen</Dropdown.Item>
      <Dropdown.Item onClick={()=>{handleFilter("Books")}}>Books</Dropdown.Item>
      <Dropdown.Item onClick={()=>{handleFilter("Sports & Outdoors")}}>Sports & Outdoors</Dropdown.Item>
    </DropdownButton>
    <div class="btn btn-secondary mt-5" onClick={()=>{setSearchResults(data)}}>Reset Filter</div>
     </div>
    
      <div className={style.grid_container}>
        {searchResults.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    
  
  </div>
</div>
        <Footer style={{"margin-top":"auto"}} />
    </div>
  )
}

export default AllProducts;
