"use client"
import AddToCart from '@/app/components/AddToCart'
import SingleProduct from '@/app/components/SingleProduct'
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const {id} = useParams();
    const {singleProduct, getSingleProduct} = useSupabase();
    useEffect(() => {
        getSingleProduct(Number(id));
    },[])

    return (
        <div className='flex'>
            <SingleProduct singleProduct= {singleProduct}/> 
            <AddToCart />           
        </div>
    )
}

export default page
