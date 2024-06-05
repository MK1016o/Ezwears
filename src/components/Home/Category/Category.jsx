import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = ({url, number, categoryName, navigation}) => {
    const navigate = useNavigate()
    return (
        <div className='relative m-10 h-80 w-64 card cursor-pointer' onClick={() => {
            navigate(`/categories/${navigation}`)
        }}>
            <img src={url} alt={`category-${number}`} className='h-full rounded-md  w-full object-contain' />
            <div className='absolute h-8 w-60 bottom-2 left-2 cardOverlay opacity-0 flex justify-around  items-center text-white bg-gray-900 rounded-md'>
                <p className=''>{categoryName}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

            </div>
        </div>
    )
}

export default Category
