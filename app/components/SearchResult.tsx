import React from 'react'
import ProductCard from './ProductCard'

const SearchResult = ({ filterData }: { filterData: any }) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1 className='text-2xl font-bold tracking-tight text-gray-900'>Results {filterData.length}</h1>
                <p>Check each product page for other buying options. Price and other details may vary based on product size and colour.
                        Based on your browsing and shopping history. Manage Preferences</p>

                <div className="py-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                    {
                        filterData?.map((product:any) => {
                            return (
                                <div key={product.id} className="group relative">
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
