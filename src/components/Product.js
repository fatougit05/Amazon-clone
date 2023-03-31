import React from 'react';
import {StarIcon} from "@heroicons/react/solid"
import Image from 'next/image';
import { useState } from 'react';
import Currency from "react-currency-format"
const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id, title, price, description, category, image}) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    const [hasPrime] = useState(Math.random() < 0.5)
        return (
    <div className='flex flex-col justify-center m-4 bg-white border-r-2 rounded-md'>
       <p className='pr-4 text-right text-gray-300' >{category}</p>
<Image className='mx-auto' src={image} height={200} width={200} objectFit="contain" ></Image>
    <h4 className='px-3 pt-3'>{title}</h4>
    <div className='flex px-3'>
        {Array(rating).fill().map((_, i) => (
                <StarIcon className='h-5 text-yellow-500'/>
        ))}

    </div>
    <div className='px-3 my-2 mt-2 text-xs line-clamp-2'>{description}</div>

<div className='mb-5'>
<Currency quantity={price} currency="GBP" />
</div>

{hasPrime && (
    <div className='flex items-center -mt-5 space-x-2 bg-white'>
        <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
        <div className='text-xs text-gray-500'>FREE Next-day Delivery</div>
    </div>
)}

<button className='mt-auto button' >Add to Basket</button>
    </div>
  )
}

export default Product