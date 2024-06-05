import React from 'react'
import TShirt from './Home/TShirt';

const SimilarProduct = ({ arr, selected }) => {
  return (
    <div>
      <hr />
      <div>
        <h2 className='py-24 text-center font-semibold text-4xl'>Similar Products</h2>
        <div className='m-8 md:m-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {arr
            .filter((el) => el.name !== selected.name)
            .map((tshirt, index) => (
              <TShirt key={index} url={tshirt.url} name={tshirt.name} />
            ))}
        </div>
      </div>

    </div>
  )
}

export default SimilarProduct
