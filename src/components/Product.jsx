import React from 'react'
import Header from './Home/Header'
import Footer from './Home/Footer'
import SimilarProduct from './SimilarProduct'
import Asset5 from '../assets/asset 5.webp'
import Asset6 from '../assets/asset 6.webp'
import Asset7 from '../assets/asset 7.webp'
import Asset8 from '../assets/asset 8.webp'
import Asset9 from '../assets/asset 9.webp'
import { useLocation, useNavigate } from 'react-router-dom'

const Product = (name, url) => {
  const location = useLocation();


  const Tshirts = [{
    url: Asset9,
    name: "Premium Oversized SILVER cotton T-shirt"
  },
  {
    url: Asset5,
    name: "Black Tee"
  },
  {
    url: Asset6,
    name: "Premium Oversized Green cotton T-shirt"
  },
  {
    url: Asset7,
    name: "White Tee"
  },
  {
    url: Asset8,
    name: "Beige Tee"
  }
  ]
  const selected = {
    url: location.state.url,
    name: location.state.name
  }
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <div className="mx-8 md:mx-28">
        <h3 className='py-10 px-5'><a className='cursor-pointer text-md px-3' onClick={() => {
          navigate('/')
        }}>Home</a> {'>'} <a className='cursor-pointer text-md px-3' onClick={() => {
          navigate('/categories')
        }}>Shop</a> {'>'}  <a className='cursor-pointer text-md px-3' onClick={() => {
          navigate('/categories/premium-oversize');
        }}>Premium Oversized cotton T-shirt</a> {'>'}
          <a className='text-md px-3'>{location.state.name}</a>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <img src={location.state.url} alt="image" className='h-96 md:m-20 shadow-lg' />
          <div className="m-8">
            <h3 className='font-semibold text-2xl py-2'>{location.state.name}</h3>
            <p className='text-xl font-medium text-gray-800 pb-4'>Per Piece <br /></p>
            <p className='text-xl font-medium'>₹999<u className='px-2 text-gray-500'>₹1499</u> <span className='text-green-300'>(33% OFF)</span> </p>
            <p className='py-2 font-medium'>You save ₹500</p>
            <p className='font-medium py-2 text-xl'>Select Color</p>
            <div className="h-10 py-3 w-10 bg-green-500 rounded-md"></div>
            <p className='py-3 font-medium text-xl'>Select Size</p>
            <button className='border-2 px-2 mx-3 text-lg font-medium rounded-sm border-gray-200 hover:bg-gray-900 hover:text-white'>XL</button>
            <button className='border-2 px-2 font-medium text-lg rounded-sm border-gray-200 hover:bg-gray-900 hover:text-white'>SM</button>
            <div className="flex gap-4 my-8 flex-col md:flex-row">
              <button className='border-2 border-black rounded-md px-16 text-xl font-medium'>Add to Cart</button>
              <button className='px-16 bg-black text-white rounded-md text-xl font-medium'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <SimilarProduct arr={Tshirts} selected={selected}></SimilarProduct>
      <Footer></Footer>
    </>
  )
}

export default Product
