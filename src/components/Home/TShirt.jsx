import React from 'react'
import { useNavigate } from 'react-router-dom'

const TShirt = ({ url, name }) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col show relative' onClick={() => {
      navigate('/product', {state: {name: name, url: url}});
    }}>
      <img src={url} alt="tshirt" className='h-96 md:w-80 shadow-lg image' />
      <div className='absolute h-8 w-48 bottom-24 flex cart items-center justify-center left-5 md:left-8 lg:left-16 text-white bg-gray-900 rounded-md opacity-0'>
          <button> Add to Cart </button>
      </div>
      <p className='p-2 font-semibold'>{name}</p>
      <div className='flex gap-5 p-2'>
        <span className='font-semibold'>₹999</span>
        <span className='text-gray-500'><u>₹1499</u></span>
        <span className='text-blue-900 font-semibold'>(33% OFF)</span>
      </div>
    </div>
  )
}

export default TShirt
