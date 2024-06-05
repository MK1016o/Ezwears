import React from 'react'
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TShirt = ({ url, name }) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col show relative' onClick={() => {
      navigate('/product', {state: {name: name, url: url}});
    }}>
      <img src={url} alt="tshirt" className='h-96 w-80 shadow-lg image' />
      <div className='absolute h-8 w-48 bottom-24 flex cart items-center justify-center left-5 md:left-8 lg:left-16 text-white bg-gray-900 rounded-md opacity-0'>
        <Popup trigger=
          {<button> Add to Cart </button>}
          modal nested>
          {
            close => (
              <div className='modal flex md:flex-col relative'>
                <div className="">
                  <img src={url} alt="tshirt" className='rounded-lg shadow-lg'/>
                </div>
                <div className='content mx-14'>
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between">
                      <p className='font-semibold text-xl text-gray-900 py-8 px-2'>{name}</p>
                      <button onClick=
                        {() => close()} className='py-2 px-2 text-red-800 font-semibold absolute top-5 right-5 border-2 border-gray-400 shadow-md'>
                        X
                      </button>
                    </div>
                    <div className="py-10">
                      <p className='text-xl font-medium'>₹999<u className='px-2 text-gray-500'>₹1499</u> <span className='text-green-300'>(33% OFF)</span> </p>
                    </div>
                    <div className="flex gap-4 mt-auto mb-5">
                      <button className='border-2 px-4 border-black rounded-md text-xl'>Add to Cart</button>
                      <button className='px-4 bg-black text-white rounded-md text-xl'>Buy Now</button>
                    </div>
                  </div>

                </div>
                <div>
                </div>
              </div>
            )
          }
        </Popup>
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
