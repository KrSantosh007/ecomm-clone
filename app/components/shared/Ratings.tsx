import React from 'react'
import { FaStar } from "react-icons/fa";

const Ratings = ({ratings}:{ratings:any}) => {
    ratings = JSON.parse(ratings);
    return (
        <div className='flex items-center'>
            {
                Array(4).fill(1).map((dummyItem, index) => 
                <FaStar key={index} height={15} width={15} color='#de7921' />)                
            }
            <h1 className='font-medium ml-2 text-sm '>{ratings.count} ratings</h1>
        </div>
    )
}

export default Ratings
