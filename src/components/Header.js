import React from 'react'
import ReactSearchBox from 'react-search-box'
import headerLogo from '../assets/flipkart-icon.png'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'



const Header = () => {
    return (
        <div className='w-full h-16 bg-blue-500'>

            <div className='w-full h-full flex justify-around items-center'>
                <div className='flex items-center justify-center'>
                    <img src={headerLogo} alt='img' className='px-1 w-10 h-8'></img>
                    <span className='px-2 text-white font-bold italic'>Flipkart</span>
                </div>

                <div className='flex justify-center items-center w-1/3'>

                <div className='w-full'>
                    <ReactSearchBox
                        placeholder='Search'
                        value='Groceries'
                        className='rounded-l-none'
                    />
                </div>
                <div className='text-2xl text-blue-500 p-2 bg-white rounded-r-md'>
                    <AiOutlineSearch />
                </div>
                </div>
                <div className='text-[1.1em] text-white flex justify-center'>
                    <button className='mx-4 font-semibold'>Shrish</button>
                    <button className='mx-4'>Become a seller</button>
                    <button className='mx-4 flex justify-center items-center'>More <IoIosArrowDown className='mx-1' /> </button>
                    {/* <IoIosArrowUp /> */}
                    <button className='mx-4 flex justify-center items-center'>Cart <AiOutlineShoppingCart className='mx-1'/></button>
                </div>
            </div>
        </div>
    )
}

export default Header
