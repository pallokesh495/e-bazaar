import React from 'react'
import style from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';


 const Footer = () => {
  return (
    <div className={style.wrapper}>
    <div className={style.section1}>
        <div style={{"width":"10rem"}}>E - Bazaar : an ecommerce platform for your daily needs on your door step</div>
        <div>subscribe for important details:
            <input className='form-control mt-3 mb-3' ></input>
            <div className='btn btn-success'>SUBSCRIBE</div>
        </div>
        <div>follow Us on:
            <div><InstagramIcon/></div>
            <div><FacebookRoundedIcon/></div>
            <div><XIcon/></div>
        </div>
        <div>Contact Us: +91 1234567890</div>
    
    </div>
    <div className={style.section2}>
        @2024 All rights reserved
        privacy policy Terms & Conditions
    </div>
    </div>
  )
}


export default Footer;