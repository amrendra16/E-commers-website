import React from 'react'
import './Relatedproduct.css'
import data_product from '../assets/data'
import Item from '../item/Item'

const Relatedproduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related Product</h1>
        <hr />
    <div className="relateproduct-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id}
            name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })
        }

    </div>

    </div>
  )
}

export default Relatedproduct
