import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'

const ProductCard = ({product} : {product:any}) => {
    return (
        <div className='border border-red-100 rounded-md'>
            <div className='cursor-pointer'>
                <div className='bg-gray-100 flex items-center justify-center h-[250px] rounded-md overflow-hidden'>
                    <Image src={product.image} width={200} height={200} alt={product.title} className='mix-blend-multiply p-8' />
                </div>
                <h1 className='font-bold'>{product.title}</h1>
                <p>{`${product.description.substring(0,50)}...`}</p>
                <Ratings ratings={product.rating}/>
                <p className='font-bold text-2xl'>{`$${product.price}`}</p>
            </div>
        </div>
    )
}

export default ProductCard
