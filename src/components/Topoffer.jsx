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
import suitcase from './../assets/Top Offer/suit.jpg';

 



const Topoffer = () => {
  return (
    
    <div className='mb-2 w-full h-96 flex justify-between items-stretch shadow-lg'>

      <div className="w-1/6 h-full bg-cyan-100">
        <div className="border-white border-2 w-full h-full flex flex-col justify-center items-center">
            <p className='text-4xl font-normal pb-10'>Top Offers</p>
            <button className='bg-blue-500 text-white font-medium text-[0.9rem] px-4 py-2'>VIEW ALL</button>
        </div>
      </div>

        <div className='w-4/6 h-full flex justify-around items-center'>
            <Carousel
                showStatus={false}
                statusFormatter={false}
                showThumbs={false}
                className='w-full h-full'
                selectedItem={true}
                // centerMode={true}
                infiniteLoop={false}
            >

            <div className='first w-full flex justify-start items-center'>
                <div className='w-80 h-96 mx-4 flex flex-col justify-around items-center hover:scale-[1.01]'>
                    <img src={waterbottle} alt="an img" className='h-60'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Water Bottle</span>
                        <span className='text-base font-medium text-green-700'>From 199</span>
                        <span className='text-sm font-medium'>Cello and more</span>
                    </div>
                </div>

                <div className='w-80 h-96 mx-4 flex flex-col justify-around items-center hover:scale-[1.01]'>
                    <img src={speaker} alt="an img" className='h-60'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Speaker</span>
                        <span className='text-base font-medium text-green-700'>From 499</span>
                        <span className='text-sm font-medium'>JBL, Sony and more</span>
                    </div>
                </div>

                <div className='w-80 h-96 mx-4 flex flex-col justify-around items-center hover:scale-[1.01]'>
                    <img src={applepencil} alt="an img" className='h-60'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Apple Pencil</span>
                        <span className='text-base font-medium text-green-700'>Min. 30% off</span>
                        <span className='text-sm font-medium'>Smooth touch technology</span>
                    </div>
                </div>

                <div className='w-80 h-96 mx-4 flex flex-col justify-around items-center hover:scale-[1.01]'>
                    <img src={ac} alt="an img" className='h-60'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>AC and coolers</span>
                        <span className='text-base font-medium text-green-700'>Bank Offer Available</span>
                        <span className='text-sm font-medium'>Orient, GM</span>
                    </div>
                </div>
            </div>


            <div className='second w-full flex justify-start items-center'>
                <div className='w-80 h-96 mx-4 flex flex-col justify-around items-center hover:scale-[1.01]'>
                    <img src={shoes} alt="an img" className='h-60'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Shoes</span>
                        <span className='text-base font-medium text-green-700'>Starting from 449</span>
                        <span className='text-sm font-medium'>Sparx, Bata and more</span>
                    </div>
                </div>

                <div className='w-80 h-96 mx-4 flex flex-col justify-around items-center hover:scale-[1.01]'>
                    <img src={tava} alt="an img" className='h-60'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Tava</span>
                        <span className='text-base font-medium text-green-700'>Min. 25% off</span>
                        <span className='text-sm font-medium'>Butterfly, Prestige</span>
                    </div>
                </div>

                <div className='w-80 h-96 mx-4 flex flex-col justify-around items-center hover:scale-[1.01]'>
                    <img src={lenovotablet} alt="an img" className='h-60'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Lenovo Tablet</span>
                        <span className='text-base font-medium text-green-700'>Bank Offer Available</span>
                        <span className='text-sm font-medium'>Lenovo, XIOMI</span>
                    </div>
                </div>

                <div className='w-80 h-96 mx-4 flex flex-col justify-around items-center hover:scale-[1.01]'>
                    <img src={suitcase} alt="an img" className='h-60'/>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-lg'>Water Bottle</span>
                        <span className='text-base font-medium'>From 199</span>
                        <span className='text-sm font-medium text-green-700'>Cello and more</span>
                    </div>
                </div>
            </div>
            </Carousel>
        </div>

      <div className="w-1/6 h-full bg-cyan-100">
        <div className="border-white border-2 w-full h-full flex flex-col justify-center items-center">
            <img src={boat} alt="an img" className='w-80 h-96' />
        </div>
      </div>
    </div>
  )
}

export default Topoffer
