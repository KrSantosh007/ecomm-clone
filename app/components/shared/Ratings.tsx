import React from 'react'
import star from '../../../public/assets/star_icon.png'
import Image from 'next/image'

const Ratings = ({ratings}:{ratings:any}) => {
    ratings = JSON.parse(ratings);
    return (
        <div className='flex items-center'>
            {
                Array(4).fill(1).map((dummyItem) => <Image src={star}  height={15} width={15} alt='rating' />)
                
            }
            <h1 className='font-light'>{ratings.count}</h1>
        </div>
    )
}

export default Ratings
