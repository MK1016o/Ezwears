import React from 'react'
import Header from './Home/Header'
import Footer from './Home/Footer'
import { useNavigate } from 'react-router-dom'
import Category from './Home/Category/Category'

const Shop = () => {
    const navigate = useNavigate();
    return (
    <>
        <Header></Header>
        <div className='mx-28'>
            <h3 className='py-10 px-5'><a className='cursor-pointer text-md px-3' onClick={() => {
                navigate('/')
            }}>Home</a> {'>'} <a className='cursor-pointer text-md px-3' onClick={() => {
                navigate('/categories')
            }}>Shop</a> </h3>
            <h2 className='font-semibold text-4xl text-gray-900 px-8'>Shop</h2>
            <div className="flex">
                <Category url="https://dukaan.b-cdn.net/700x700/webp/media/1d93c30f-c442-48e5-9cfb-eaf1f37d5676.png" number='1' categoryName='Premium OverSize Cotton' navigation="premium-oversize"></Category>
                <Category url="https://dukaan.b-cdn.net/700x700/webp/media/d4194a59-a21b-4900-8361-c781a5ebddbc.png" number={2} categoryName="Premium Cotton T-shirt" navigation={"premium-cotton"}></Category>
            </div>
        </div>
        <Footer></Footer>
    </>
  )
}

export default Shop
