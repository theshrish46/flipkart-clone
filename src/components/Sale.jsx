import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import saleislive from './../assets/Sale/saleislive.jpg';
import iphone from './../assets/Sale/iphonesale.jpg';
import summersale from './../assets/Sale/summersale.jpg';
import icici from './../assets/Sale/icici.jpg';
import flight from './../assets/Sale/flight.jpg';

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'





const Sale = () => {
    return (
        <div>
            <div className='w-full h-[26rem] py-1 mb-8 bg-gray-100'>
                <div className='mx-1 my-2 p-1 relative shadow-md'>
                    <SlArrowRight  className='absolute w-12 h-24 z-10 text-4xl font-semibold bg-white p-2 top-24 right-1 rounded-sm shadow-lg'/>
                    <SlArrowLeft  className='absolute w-12 h-24 z-10 text-4xl font-semibold bg-white p-2 top-24 left-1 rounded-sm shadow-lg'/>
                    <Carousel infiniteLoop showIndicators={false} autoPlay showStatus={false} showThumbs={false} stopOnHover={true} className='h-full' >
                        <div className='h-[17rem]'>
                            <img src={saleislive} alt="an img" className='h-full'/>
                        </div>

                        <div className='h-[17rem]'>
                            <img src={flight} alt="an img" className='h-full'/>
                        </div>

                        <div className='h-[17rem]'>
                            <img src={iphone} alt="an img" className='h-full'/>
                        </div>

                        <div className='h-[17rem]'>
                            <img src={summersale} alt="an img" className='h-full'/>
                        </div>
                    </Carousel>

                </div>
                
                <div className='m-1 p-1 shadow-lg'>
                    <img src={icici} alt="an img" />
                </div>
            </div>
        </div>
    )
}

export default Sale
