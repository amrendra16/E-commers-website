import React, { useContext } from 'react'
import {Shopcontext} from '../context/Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrom from '../components/Breadcrom/Breadcrom';
import Productdisplay from '../components/Productdispaly/Productdisplay';
import Descriptionbox from '../components/DescriptionBox/Descriptionbox';
import Relatedproduct from '../components/Relatedproduct/Relatedproduct';


const Product = () => {
  const {all_product}=useContext(Shopcontext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrom product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproduct/>
      
    </div>
  )
}

export default Product
