import React from 'react'
import Category from './Category/Category'

const Categories = () => {
    return (
        <>
            <div className="flex flex-col xl:flex-row gap-2 md:justify-start md:gap-8 md:items-center px-16 my-12 md:px-32">
                <h2 className='font-semibold text-4xl text-gray-900 px-12 md:px-24'>Categories</h2>
                <Category url="https://dukaan.b-cdn.net/700x700/webp/media/1d93c30f-c442-48e5-9cfb-eaf1f37d5676.png" number='1' categoryName='Premium OverSize Cotton' navigation={"premium-oversize"}></Category>
                <Category url="https://dukaan.b-cdn.net/700x700/webp/media/d4194a59-a21b-4900-8361-c781a5ebddbc.png" number={2} categoryName="Premium Cotton T-shirt" navigation={"premium-cotton"}></Category>
            </div>
        </>
    )
}

export default Categories
