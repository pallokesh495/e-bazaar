import {useState,useEffect}from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';

import logo from '../../assets/logo.png'
import logotxt from '../../assets/logotext.png'
import styles from'./Header.module.css'




 const Header = () => {

const navigate = useNavigate();  



const [query, setQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);

const[searchVisiblity, setSearchVisiblity] = useState(styles.invisible);

const [data, setData] = useState([]);
useEffect(() => {
    axios.get('http://localhost:8080/all-products') 
    .then(response => {
      setData(response.data)
      
     
    })
    .catch(error => {
      console.log("error in fetching data====>",error )
      
    });
    
  }, []);






const handleEnter = (e)=>{

  if(e.key==='Enter')handleSubmit();

}

const handleSubmit = ()=>{
  
  const filteredResults = data.filter((item) =>
    item.category.toLowerCase().includes(query.toLowerCase())   
  );
 
  if(filteredResults.length > 0){
    
    setSearchResults(filteredResults);
  setQuery('');
  setSearchVisiblity(styles.results);
  }
  

}

  return (
    <div class="col-11"  className={styles.wrapper}>

      <div className={searchVisiblity}>
        <div onClick={()=>{setSearchVisiblity(styles.invisible)}}  className={styles.close}>close</div>
        {
          searchResults.map((item, key)=>{
            console.log(item)
            return <Link to={`/product/${item.productId}`}><div className={styles.resultItem}> {item.name}</div></Link>
          })
        }
      </div>
    
        
         <img src={logo} alt='hello'  class="col col-1"  onClick={()=>{navigate('/')}}/>
        <img src={logotxt} alt='hello' class="col col-2" onClick={()=>{navigate('/')}} />
        <div class="col-4">
        <input class="form-control"   type="search" placeholder="Search item by category" aria-label="Search" value={query} 
        onChange={(e)=>{setQuery(e.target.value)}} onKeyPress={(e)=>{handleEnter(e)}}  />
        </div>
        <button class=" col-1" className={styles.searchbtn} type="submit" onClick={handleSubmit}  >Search item <SearchOutlinedIcon/></button>
           
        <div className={styles.tabs}>
           <Link  className={styles.tab} to="/login">Login <AccountCircleRoundedIcon/></Link>
           <Link  className={styles.tab} to="/cart">Cart <ShoppingCartOutlinedIcon/></Link>
           <Link  className={styles.tab} to="/allProducts">allProducts <CategoryRoundedIcon/></Link>
           
        </div>
       
        
    </div>
          
        
   
  )
}
export default Header;