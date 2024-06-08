import React from 'react'


import Header from '../../components/header/Header';
import Categories from '../../components/categories/Categories';
import Slider from '../../components/slider/Slider';




import './Home.module.css'
import Footer from '../../components/footer/Footer';
import ProductCard from '../../components/productCard/ProductCard';
 import data from '../../assets/category.json'



const Electronics = data.filter((item)=>item.category==="Electronics")
const Clothings = data.filter((item)=>item.category==="Clothing")
const Books = data.filter((item)=>item.category==="Books")
const House = data.filter((item)=>item.category==="Home & Kitchen")

const style_title ={
"font-size":"1.5rem",
"color":"white",
"margin":"5px",
"background-color":"grey",
"border-radius":"10px",
"padding":"5px"
}
const style_section ={
  "margin":"1rem 1rem ",
  "background-color": "whitesmoke",
  
}
const style_category_section ={
  "margin-top":"8rem",
  "background-color": "#f8f9fa"
}


 const Home = () => {  

  return (
    <div style={{"display":"flex","flexDirection":"column","min-height":"100vh"}}>
      
    <Header/>
    
    <div style={style_category_section}>
    <Categories />
    </div>
    <div style={style_section} >
    <Slider  />
    </div>
    
    <div style={style_title}>Best in Electronics:</div>
    <div class="d-flex flex-wrap justify-content-around" >
    {
      
      Electronics.map((item,key)=>{
        return <ProductCard item={item} key={key}/>
      })
      
    }
    </div>
    <div style={style_title}>Best in Clothings :</div>
    <div class="d-flex flex-wrap justify-content-around" >
    {
      
      Clothings.map((item,key)=>{
        return <ProductCard item={item} key={key}/>
      })
      
    }
    </div>
    <div style={style_title}>Best in Books :</div>
    <div class="d-flex flex-wrap justify-content-around" >
    {
      
      Books.map((item,key)=>{
        return <ProductCard item={item} key={key}/>
      })
      
    }
    </div>
    <div style={style_title}>Best in Home & Kitchen :</div>
    <div class="d-flex flex-wrap justify-content-around" >
    {
      
      House.map((item,key)=>{
        return <ProductCard item={item} key={key}/>
      })
      
    }
    </div>
    
    
    
    <Footer/>
   
    </div>
  )
}

export default Home;