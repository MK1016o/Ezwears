import React from 'react'
import Logo from '../../assets/logo.webp'
import Insta from '../../assets/Instagram.svg'
import Payment from './Payment'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='bg-gray-100'>
        <hr />
        <img src={Logo} alt="logo" className='h-16 w-16 mx-40 cursor-pointer' onClick={() => {
          navigate('/')
        }}/>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 my-8 mx-12 sm:mx-32'>
          <div className='flex flex-col'>
            <h4 className='font-semibold py-3 text-xl'>Contact details</h4>
            <p className='text-gray-700'>Address: 962/1 VISHWAKARMA ROAD <br /> AMBALA CITY 134003</p>
            <p className='text-gray-700'>Contact us: <a href="mailto:help.ezwears@gmail.com">help.ezwears@gmail.com</a></p>
          </div>
          <div className='flex flex-col'>
            <h4 className='font-semibold py-3 text-xl'>Collection</h4>
            <p className='cursor-pointer' onClick={() => {
              navigate("/categories/premium-oversize");
            }}>Premium Oversized Cotton T-shirt</p>
            <p className='cursor-pointer' onClick={() => {
              navigate("/categories/premium-cotton");
            }}>Premium Cotton T-shirt</p>
          </div>
          <div className='flex flex-col'>
            <h4 className='font-semibold py-3 text-xl'>Connect with us</h4>
            <span className='flex'>
              <img src={Insta} alt="Instagram" />
              <a href="https://www.instagram.com/ezsnippet/">Instagram</a>
            </span>
          </div>
        </div>
        <hr />
        <Payment></Payment>
      </div>
    </>

  )
}

export default Footer
