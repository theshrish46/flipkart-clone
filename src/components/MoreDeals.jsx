import React from 'react';
import crazydeals from './../assets/More Deals/crazydeals.png';
import ac from './../assets/More Deals/ac.png';
import dealsonlaptop from './../assets/More Deals/dealsonlaptop.png';
import savemore from './../assets/More Deals/savemore.png';
import saveontv from './../assets/More Deals/saveontv.png';
import savemore2 from './../assets/More Deals/savemore2.png';

const MoreDeals = () => {
  return (
    <div>
      <div className='w-full h-full grid grid-cols-3 justify-items-center content-center items-stretch place-content-stretch gap-2'>
        <div className="shadow-xl h-60 w-[31rem] flex justify-center items-center">
          <img src={savemore} alt="an img" className='h-full w-full' />
        </div>
        <div className="shadow-xl h-60 w-[31rem] flex justify-center items-center">
          <img src={savemore2} alt="an img" className='h-full w-full' />
        </div>
        <div className="shadow-xl h-60 w-[31rem] flex justify-center items-center">
          <img src={crazydeals} alt="an img" className='h-full w-full' />
        </div>
        <div className="shadow-xl h-60 w-[31rem] flex justify-center items-center">
          <img src={ac} alt="an img" className='h-full w-full' />
        </div>
        <div className="shadow-xl h-60 w-[31rem] flex justify-center items-center">
          <img src={saveontv} alt="an img" className='h-full w-full' />
        </div>
        <div className="shadow-xl h-60 w-[31rem] flex justify-center items-center">
          <img src={dealsonlaptop} alt="an img" className='h-full w-full' />
        </div>
      </div>
    </div>
  )
}

export default MoreDeals