import React from 'react'
import ReactSearchBox from 'react-search-box'
import headerLogo from '../assets/Logo/flipkart-icon.png'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'



const Header = () => {
    return (
        <div className='w-full h-14 bg-blue-500'>

            <div className='w-full h-full flex justify-around items-center'>
                <div className='flex items-center justify-center'>
                    <img src={headerLogo} alt='img' className='px-1 w-8 h-6'></img>
                    <span className='px-2 text-white text-[1.2rem] font-bold italic'>Flipkart</span>
                </div>

                <div className='flex justify-center items-center w-1/3'>

                <div className='w-full h-10 text-[1rem]'>
                    <ReactSearchBox
                        placeholder='Search'
                        value='Groceries'
                        className='rounded-l-none text-[1rem]'
                    />
                </div>
                <div className='text-2xl text-blue-500 p-2 bg-white rounded-r-md'>
                    <AiOutlineSearch />
                </div>
                </div>
                <div className='text-[1rem] text-white flex justify-center'>
                    <button className='mx-4 text-[1rem] font-semibold'>Shrish</button>
                    <button className='mx-4 text-[1rem]'>Become a seller</button>
                    <button className='mx-4 text-[1rem] flex justify-center items-center'>More <IoIosArrowDown className='mx-1' /> </button>
                    {/* <IoIosArrowUp /> */}
                    <button className='mx-4 text-[1rem] flex justify-center items-center'>Cart <AiOutlineShoppingCart className='mx-1 text-[1.1rem]'/></button>
                </div>
            </div>
        </div>
    )
}

export default Header
