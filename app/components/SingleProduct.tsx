import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            {
                singleProduct.map((product: any) => {
                    return (
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
                                <Image alt={product.title} className="lg:w-1/4  object-cover object-center rounded" height={300} width={300} src={product.image}  />
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.title}</h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                                    <div className="flex mb-4">
                                        <span className="flex items-center">                                        
                                            <span className="text-gray-600 ml-3"><Ratings ratings={product.rating}  /></span>
                                        </span>
                                    </div>
                                    <p className="leading-relaxed">{product.description}</p>
                                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                        <div className="flex">
                                            <span className="mr-3">Color</span>
                                            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                        </div>
                                        <div className="flex ml-6 items-center">
                                            <span className="mr-3">Size</span>
                                            <div className="relative">
                                                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                                    <option>SM</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select>
                                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
                                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default SingleProduct
