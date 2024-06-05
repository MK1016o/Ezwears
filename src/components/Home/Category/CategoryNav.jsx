import React from 'react'
import DownArrow from '../../../assets/Down Arrow.svg'
import { useNavigate } from 'react-router-dom'

const CategoryNav = ({ name, navigation }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className='py-10 px-5'><a className='cursor-pointer text-md px-3' onClick={() => {
        navigate('/')
      }}>Home</a> {'>'} <a className='cursor-pointer text-md px-3' onClick={() => {
        navigate('/categories')
      }}>Shop</a> {'>'}  <a className='cursor-pointer text-md px-3' onClick={() => {
        navigate(`/categories/${navigation}`);
      }}>{name}</a> </h3>
      <div className="flex justify-between flex-col md:flex-row gap-5">
        <h2 className='font-semibold text-5xl text-gray-900 px-8'>{name} <span className='text-gray-500'>(5)</span></h2>
        <div className="flex justify-between items-center gap-4">
          <p className='font-semibold text-xl'>Sort by:</p>
          <button className='flex border-2 font-semibold border-black rounded-xl justify-center items-center px-3 py-2'>Featured <img src={DownArrow} alt="DownArrow" className='h-5' /></button>
        </div>
      </div>

    </div>
  )
}

export default CategoryNav
