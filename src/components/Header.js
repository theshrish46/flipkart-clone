import React from 'react'
import ReactSearchBox from 'react-search-box'
import headerLogo from '../assets/flipkart-icon.png'

const Header = () => {
    return (
        <div className='w-full h-16 bg-blue-500'>

            <div className='w-full h-full flex justify-around items-center'>
                <div className='flex items-center justify-center'>
                    <img src={headerLogo} alt='img' className='px-1 w-10 h-8'></img>
                    <span className='px-2 text-white font-bold italic'>Flipkart</span>
                </div>
                <div className='w-2/6'>
                    <ReactSearchBox
                        placeholder='Search'
                        value='Groceries'
                    />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header
