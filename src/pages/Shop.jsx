import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import Newcollaction from '../components/NewCallection/Newcollaction'
import Newslatter from '../components/Newslatter/Newslatter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollaction/>
      <Newslatter/>
    </div>
  )
}

export default Shop
