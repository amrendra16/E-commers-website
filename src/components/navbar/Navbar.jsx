import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../context/Shopcontext'

const Navbar = () => {
    const [menu,setMenu]=useState("");
    const {getTotalCartItems}=useContext(Shopcontext)
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
           <p onClick={()=>{setMenu("shoping")}}><Link to='/' style={{textDecoration:"none", color:"black"}}>SHOPING {menu==="shoping"?<></>:<></>}</Link></p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none", color:" #171717"}} to="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none", color:" #171717"}}  to="/mens">Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none", color:" #171717"}}  to="/womens">Womens</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none", color:" #171717"}}  to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
    </ul>
        <div className="nav-login-cart">
            <Link to="login"><button>Login</button></Link>
            <Link to="cart"><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      
    </div>
  )
}

export default Navbar
