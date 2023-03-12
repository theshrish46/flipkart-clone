import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Topoffer = () => {
  return (
    <div className='mx-2 mb-20 h-96 flex justify-between items-stretch'>

      <div className="w-full h-full bg-cyan-100">
        <div className="border-white border-2 w-64 h-full flex flex-col justify-center items-center">
            <p className='text-4xl font-normal pb-10'>Top Offers</p>
            <button className='bg-blue-500 text-white font-medium text-[0.9rem] px-4 py-2'>VIEW ALL</button>
        </div>
      </div>

      <Carousel>

      </Carousel>

      <div className="w-full h-full bg-cyan-100">
        <div className="border-white border-2 w-64 h-full flex flex-col justify-center items-center">
            <p className='text-4xl font-normal pb-10'>Top Offers</p>
            <button className='bg-blue-500 text-white font-medium text-[0.9rem] px-4 py-2'>VIEW ALL</button>
        </div>
      </div>
    </div>
  )
}

export default Topoffer
