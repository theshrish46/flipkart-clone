import React from 'react'
import { grocery } from './../assets/grocery.jpeg'


const Categories = () => {
  return (
    <div className='w-full h-40'>
      <div className='w-20 h-20'>
        <Image
          src={grocery}
          alt='react img'
          className='w-full h-full px-2'
          
        />
        <span>Appliances</span>
      </div>
    </div>
  )
}

export default Categories
 