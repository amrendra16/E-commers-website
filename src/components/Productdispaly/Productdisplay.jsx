import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../assets/star_icon.png'
import stardul_icon from '../assets/star_dull_icon.png'
import { Shopcontext } from '../../context/Shopcontext'
import { MagnifierPreview,MagnifierContainer,MagnifierZoom} from 'react-image-magnifiers'


const Productdisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(Shopcontext)
  return (
    <div className='productdisplay'>
        <div className="productdiplay-left">
            <div className="productdiplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            </div>
            {/* <div className="productdiplay-img"> */}
            <MagnifierContainer>
  <div className="productdiplay-img">
    <MagnifierPreview style={{width:"400px"}} imageSrc={product.image} />
  </div>
    <MagnifierZoom className='productdispal-img-zoom' style={{ height: "220px",top:'10px' }} imageSrc={product.image}/>
</MagnifierContainer>
    {/* <img className='productdiplay-main-img' src={product.image} alt="" /> */}
                
            {/* </div> */}

        </div>
        <div className="productdiplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={stardul_icon} alt="" />
                <p>(142)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-prices-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                
            </div>
            <div className="productdisplay-right-size">
               <h1> Select Size</h1>
               <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>

               </div>
            </div>
           <div>
           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <button className='product-display-buynow'><a href="/login" style={{textDecoration:"none" , color:"white"}}>Buy Now</a></button>
           </div>
            <p className="productdisplay-right-category">
                <span>Category :</span>Women, T-Shirt, Crop Top
            </p>
            <p className="productdisplay-right-category">
                <span>Tags :</span>Morden ,Latest
            </p>


        </div>
      
    </div>
  )
}

export default Productdisplay
