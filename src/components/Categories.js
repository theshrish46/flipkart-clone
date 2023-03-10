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
import { RiArrowDropDownLine } from 'react-icons/ri';



const Categories = () => {

const twoWheeler = document.getElementById('twowheeler')
const hiddenTwoWheeler = document.getElementById('hiddentwowheeler')

function handel(e) {
  e.preventDefault();
  console.log('hei')
}

  return (
    <div className='w-full h-28 flex justify-center items-center shadow-md'>
      
      <div className='w-32 h-32 px-2 flex flex-col text-[0.9rem] font-semibold justify-center items-center hover:text-blue-500'>
        <img src={grocery} alt="an graphics" className='w-16'/>
        <span>Grocery</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center hover:text-blue-500'>
        <img src={mobile} alt="an graphics" className='w-16'/>
        <span>Mobiles</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center hover:text-blue-500'>
        <img src={fashion} alt="an graphics" className='w-16'/>
        <div className='flex justify-center items-center'>
          <span>Fashion</span>
          <RiArrowDropDownLine size={25}/>
        </div>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center hover:text-blue-500'>
        <img src={electronics} alt="an graphics" className='w-16'/>
        <div className='flex justify-center item-center'>
          <span>Electronics</span>
          <RiArrowDropDownLine size={25}/>
        </div>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center hover:text-blue-500'>
        <img src={home} alt="an graphics" className='w-16'/>
        <div className='flex justify-center item-center'>
          <span>Home</span>
          <RiArrowDropDownLine size={25}/>
        </div>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center hover:text-blue-500'>
        <img src={appliances} alt="an graphics" className='w-16'/>
        <div>
          <span>Appliances</span>
        </div>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center hover:text-blue-500'>
        <img src={travel} alt="an graphics" className='w-16'/>
        <span>Travel</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center hover:text-blue-500'>
        <img src={topoffer} alt="an graphics" className='w-16'/>
        <span>Top Offers</span>
      </div>

      <div className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center hover:text-blue-500'>
        <img src={kids} alt="an graphics" className='w-16'/>
        <div className='flex justify-center item-center'>
          <span>Kids</span>
          <RiArrowDropDownLine size={25}/>
        </div>
      </div>

      <div id='twowheeler' className='w-32 h-28 flex flex-col text-[0.9rem] font-semibold justify-center items-center hover:text-blue-500'>
        <img src={twowheeler} alt="an graphics" className='w-16'/>
        <div className='flex justify-center item-center'>
          <span>Two Wheelers</span>
          <RiArrowDropDownLine size={25}/>
        </div>
      </div>

      <div id='hiddentwowheeler' className='w-60 h-42 absolute top-44 right-36 bg-white hidden' onClick={handel}>
        <p className='mx-4 px-2 py-3 text-justify text-[1rem] hover:text-blue-500 hover:bg-gray-100 hover:font-semibold hover:rounded-sm'>Petrol Vehicles</p>
        <p className='mx-4 px-2 py-3 text-justify text-[1rem] hover:text-blue-500 hover:bg-gray-100 hover:font-semibold hover:rounded-sm'>Electric Vehicles</p>
        <p className='mx-4 px-2 py-3 text-justify text-[1rem] hover:text-blue-500 hover:bg-gray-100 hover:font-semibold hover:rounded-sm'>Diesel Vehicles</p>
      </div>

    </div>
  )
}

export default Categories
 