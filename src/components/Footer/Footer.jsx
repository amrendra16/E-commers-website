import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import insta_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'




const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p><a href="/" style={{textDecoration:"none", color:"black"}}>SHOPING</a></p>
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Offices</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-conatiner">
                <img src={insta_icon} alt="" />
            </div>
            <div className="footer-icon-conatiner">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icon-conatiner">
                <a href="https://wa.me/918881084485"><img src={whatsapp_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copy @ 2023 Amrendra</p>
        </div>
      
    </div>
  )
}

export default Footer
