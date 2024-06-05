import React from 'react'

const Filter = () => {
    return (
        <div className="my-24 w-64">
            <h3 className='font-semibold py-2 text-3xl'>Filters</h3>
            <hr className='h-1 bg-black' />
            <div className="flex py-4 gap-2 flex-col text-xl">
                <p>size</p>
                <label>
                    <input type="checkbox" className='mr-5' name="SM" id="" />
                    <span>SM</span>
                </label>
                <label>
                    <input type="checkbox" className='mr-5' name="L/XL" id="" />
                    <span>L/XL</span>
                </label>
                <label>
                    <input type="checkbox" className='mr-5' name="S/M" id="" />
                    <span>S/M</span>
                </label>
                <label>
                    <input type="checkbox" className='mr-5' name="LXL" id="" />
                    <span>LXL</span>
                </label>

            </div>

        </div>
    )
}

export default Filter
