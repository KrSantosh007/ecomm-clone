
import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'
import { useRouter } from 'next/navigation'

const ProductCard = ({product} : {product:any}) => {
    const router = useRouter();
    return (
        <div className='border shadow-2xl rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='cursor-pointer' onClick={() => {
                router.push(`/product/${product.id}`)
            }}>
                <div className='bg-gray-100 flex items-center justify-center h-[250px] rounded-md overflow-hidden'>
                    <Image src={product.image} width={200} height={200} alt={product.title} className='mix-blend-multiply p-8' />
                </div>
                <div className='px-3 mt-1 py-3'>
                    <h1 className='font-bold'>{`${product.title.substring(0,20)}...`}</h1>
                    <p>{`${product.description.substring(0,50)}...`}</p>
                    <Ratings ratings={product.rating}/>
                    <p className='font-semibold text-xl text-[#023a5c]'>{`$${product.price}`}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
