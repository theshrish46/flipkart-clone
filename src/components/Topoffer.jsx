import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import boat from './../assets/Top Offer/boat.jpg';

import waterbottle from './../assets/Top Offer/waterbottle.jpg';
import speaker from './../assets/Top Offer/speaker.jpg';
import applepencil from './../assets/Top Offer/applepencil.jpg';
import shoes from './../assets/Top Offer/shoes.jpg';
import lenovotablet from './../assets/Top Offer/lenovotablet.jpg';
import tava from './../assets/Top Offer/tava.jpg';
import ac from './../assets/Top Offer/ac.jpg';



const Topoffer = () => {
  return (
    
    <div className='mx-2 mb-20 w-full h-96 flex justify-between items-stretch border-2 border-cyan-900'>

      <div className="w-1/5 h-full bg-cyan-100">
        <div className="border-white border-2 w-full h-full flex flex-col justify-center items-center">
            <p className='text-4xl font-normal pb-10'>Top Offers</p>
            <button className='bg-blue-500 text-white font-medium text-[0.9rem] px-4 py-2'>VIEW ALL</button>
        </div>
      </div>

        <div className='w-3/5 flex justify-around items-center'>
            <Carousel
                showStatus={false}
                statusFormatter={false}
                showThumbs={false}
                className='w-full h-full'
            >

                <div className='w-60 h-full flex flex-col justify-around items-center border-red-500 border-2'>
                    <img src={waterbottle} alt="an img" className='h-40'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Water Bottle</span>
                        <span className='text-base font-medium'>From 199</span>
                        <span className='text-sm font-medium text-green-700'>Cello and more</span>
                    </div>
                </div>

                <div className='w-60 h-full flex flex-col justify-around items-center'>
                    <img src={waterbottle} alt="an img" className='h-40'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Water Bottle</span>
                        <span className='text-base font-medium'>From 199</span>
                        <span className='text-sm font-medium text-green-700'>Cello and more</span>
                    </div>
                </div>

                <div className='w-60 h-full flex flex-col justify-around items-center'>
                    <img src={waterbottle} alt="an img" className='h-40'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Water Bottle</span>
                        <span className='text-base font-medium'>From 199</span>
                        <span className='text-sm font-medium text-green-700'>Cello and more</span>
                    </div>
                </div>

                <div className='w-60 h-full flex flex-col justify-around items-center'>
                    <img src={waterbottle} alt="an img" className='h-40'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Water Bottle</span>
                        <span className='text-base font-medium'>From 199</span>
                        <span className='text-sm font-medium text-green-700'>Cello and more</span>
                    </div>
                </div>

                <div className='w-60 h-full flex flex-col justify-around items-center'>
                    <img src={waterbottle} alt="an img" className='h-40'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Water Bottle</span>
                        <span className='text-base font-medium'>From 199</span>
                        <span className='text-sm font-medium text-green-700'>Cello and more</span>
                    </div>
                </div>

                <div className='w-60 h-full flex flex-col justify-around items-center'>
                    <img src={waterbottle} alt="an img" className='h-40'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Water Bottle</span>
                        <span className='text-base font-medium'>From 199</span>
                        <span className='text-sm font-medium text-green-700'>Cello and more</span>
                    </div>
                </div>

                <div className='w-60 h-full flex flex-col justify-around items-center'>
                    <img src={waterbottle} alt="an img" className='h-40'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Water Bottle</span>
                        <span className='text-base font-medium'>From 199</span>
                        <span className='text-sm font-medium text-green-700'>Cello and more</span>
                    </div>
                </div>
            </Carousel>
        </div>

      <div className="w-1/5 h-full bg-cyan-100">
        <div className="border-white border-2 w-full h-full flex flex-col justify-center items-center">
            <img src={boat} alt="an img" className='w-80 h-96' />
        </div>
      </div>
    </div>
  )
}

export default Topoffer
