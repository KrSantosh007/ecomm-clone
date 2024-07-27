"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/assets/jmj.png'
import { BiCart } from 'react-icons/bi'
import { IoSearch } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
// import { FaAngleDown } from 'react-icons/fa'

const itemList = [
    "All",
    "Fresh",
    "Amazon Pay",
    "Sell",
    "Mobile",
    "Fashion",
    "Gift Cards",
    "Baby",
    "Buy Again",
    "Browsing History", 
    "Home & Kitchen", 
    "Amazon Business",
    "AmazonBasics",  
    "Gist Ideas",
    "Amazon miniTV",
    "Health, Household & Personal Care"
]

const Header = () => {

    const [query, setQuery] = useState<string>("");
    const router = useRouter();
    const searchHandler = () => {
        router.push(`/search/${query}`);
    }

    return (
        <>
            <div className='bg-[#E3E6E6] text-[#131921] shadow-lg py-1'>
                <div className='flex items-center justify-between w-[90%] mx-auto'>
                    <div className='w-[10%]'>
                        <Link href={'/'}><Image src={logo} width={150} height={150} alt='logo' /></Link>
                    </div>
                    <div className='w-[60%] flex items-center border rounded-md border-[#e6e6e6] '>
                        <button className='py-2 px-4 bg-[#023a5c] text-[#f9f9f9] rounded-l-md '>All</button>
                        <input 
                            type="text" 
                            className='w-full p-2 text-[#023a5c]' 
                            placeholder='Search products...' 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <div 
                            className='bg-[#023a5c] p-2 rounded-r-md'
                            onClick={searchHandler}
                        >
                            <IoSearch size={24} className='text-[#fff]' />
                        </div>
                    </div>
                    <div className='flex items-center justify-around w-[20%]'>
                        <div className='cursor-pointer'>
                            <h1 className='text-xs text-[#023a5c]'>Hello, Santosh</h1>
                            <h1 className='font-medium text-sm text-[#023a5c]'>Account & List</h1>
                        </div>
                        <div className='cursor-pointer'>
                            <p className='text-xs text-[#023a5c]'>Returns</p>
                            <h1 className='font-medium text-sm text-[#023a5c]'>& Orders</h1>
                        </div>
                        <div className='cursor-pointer'>
                            <p className='relative top-1 left-4 text-[#023a5c]'>0</p>
                            <div className='flex'>
                                <div className='mt-[-10px]'>
                                    <BiCart size={40} color='#023a5c' />
                                </div>
                                <h1 className='my-2 font-semibold text-[#023a5c]'>cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#232f3e] w-full text-[#fff] p-2 flex justify-between items-center'>
                <div className='text-[14px] leading-3'>
                {
                    itemList.map((link, index) =>{
                        return (
                            <Link key={index} href={`/${link}`} className='mt-5 mr-0 mb-6 ml-0 p-2 border border-transparent hover:border-[#fff] rounded-sm'>{link}</Link>
                        )
                    })
                }
                </div>
                <div className='mr-10'>
                    <h1 className='text-[#e7ae44] font-bold cursor-pointer hover:underline'>Sign out</h1>
                </div>
            </div>
        </>
    )
}

export default Header
