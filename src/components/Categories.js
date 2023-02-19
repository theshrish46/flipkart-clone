import React from 'react'
import {appliances} from './../assets/appliances.webp'
import {fashion} from './../assets/fashion.webp'
import {electronics} from './../assets/electronics.webp'
import {home} from './../assets/home.webp'
import {grocery} from './../assets/grocery.webp'
import {travel} from './../assets/travel.webp'
import {twowheelers} from './../assets/twowheelers.webp'
import {topoffers} from './../assets/topoffers.webp'
import {mobiles} from './../assets/mobiles.webp'
import {kids} from './../assets/kids.webp'

const Categories = () => {
  return (
    <div>
      <div>
        <img src='./../assets/appliances.webp' alt='an img'></img>
        <span>Appliances</span>
      </div>
      <div>
        <img src='./../assets/fashion.webp' alt='an img'></img>
        <span>Fashion</span>
      </div>
      <div>
        <img src='./../assets/mobiles.webp' alt='an img'></img>
        <span>Mobiles</span>
      </div>
      <div>
        <img src='./../assets/electronics.webp' alt='an img'></img>
        <span>Electronics</span>
      </div>
      <div>
        <img src='./../assets/grocery.webp' alt='an img'></img>
        <span>Grocery</span>
      </div>
      <div>
        <img src='./../assets/topoffers.webp' alt='an img'></img>
        <span>Top Offers</span>
      </div>
      <div>
        <img src='./../assets/travel.webp' alt='an img'></img>
        <span>Travel</span>
      </div>
      <div>
        <img src='./../twowheelers.webp' alt='an img'></img>
        <span>Two Wheelers</span>
      </div>
      <div>
        <img src='./../kids.webp' alt='an img'></img>
        <span>Kids</span>
      </div>
    </div>
  )
}

export default Categories
 