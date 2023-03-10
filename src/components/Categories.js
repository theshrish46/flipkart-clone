import React from 'react';
import  grocery from './../assets/grocery.png';
import electronics from './../assets/electronics.png';
import kids from './../assets/kids.png';
import fashion from './../assets/fashion.jpeg';
import home from './../assets/home.jpeg';
import mobile from './../assets/mobiles.png';
import travel from './../assets/travel.png';
import twowheeler from './../assets/twowheelers.png';
import topoffer from './../assets/topoffers.png';
import appliances from './../assets/appliances.png';


const Categories = () => {
  return (
    <div className='w-full h-28 flex justify-center items-center shadow-md'>
      
      <div className='w-32 h-32 px-2 flex flex-col text-[0.9rem] font-semibold justify-center items-center'>
        <img src={grocery} alt="an graphics" className='w-16'/>
        <span>Grocery</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center'>
        <img src={mobile} alt="an graphics" className='w-16'/>
        <span>Mobiles</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center'>
        <img src={fashion} alt="an graphics" className='w-16'/>
        <span>Fashion</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center'>
        <img src={electronics} alt="an graphics" className='w-16'/>
        <span>Electronics</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center'>
        <img src={home} alt="an graphics" className='w-16'/>
        <span>Home</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center'>
        <img src={appliances} alt="an graphics" className='w-16'/>
        <span>Appliances</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center'>
        <img src={travel} alt="an graphics" className='w-16'/>
        <span>Travel</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center'>
        <img src={topoffer} alt="an graphics" className='w-16'/>
        <span>Top Offers</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center'>
        <img src={kids} alt="an graphics" className='w-16'/>
        <span>Kids</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center'>
        <img src={twowheeler} alt="an graphics" className='w-16'/>
        <span>Two Wheelers</span>
      </div>

    </div>
  )
}

export default Categories
 