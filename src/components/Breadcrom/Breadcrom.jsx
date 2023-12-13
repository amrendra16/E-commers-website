import React from 'react'
import './Breadcrom.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrom = (props) => {
    const {product}=props;
  return (
    <div className='breadcrom'>
       HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
       {product.category} <img src={arrow_icon} alt="" />
       {product.name}
      
    </div>
  )
}

export default Breadcrom
