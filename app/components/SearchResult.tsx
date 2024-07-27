import React from 'react'
import ProductCard from './ProductCard'

const SearchResult = ({ filterData }: { filterData: any }) => {
    return (
        <div className='w-[80%] mx-auto'>
            <div className='mt-10'>
                <div>
                    <h1 className='font-bold text-2xl'>Results {filterData.length}</h1>
                    <p>Check each product page for other buying options. Price and other details may vary based on product size and colour.
                        Based on your browsing and shopping history. Manage Preferences</p>
                </div>
                <div className='grid grid-cols-4 gap-2'>
                    {
                        filterData?.map((product:any) => {
                            return (
                                <div key={product.id}>
                                    <ProductCard product={product}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchResult
