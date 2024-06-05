import React from 'react'
import TShirt from './TShirt'
import Asset5 from '../../assets/asset 5.webp'
import Asset6 from '../../assets/asset 6.webp'
import Asset7 from '../../assets/asset 7.webp'
import Asset8 from '../../assets/asset 8.webp'
import Asset9 from '../../assets/asset 9.webp'
import { useNavigate } from 'react-router-dom'

const OverSizedTees = () => {
  const navigate = useNavigate();
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
  return (
    <div className='bg-gray-100'>
      <h2 className='py-24 text-center font-semibold text-4xl'>OverSized Tees</h2>
      <div className='m-12 md:mx-24 grid gap-8 md:grid-cols-3 sm:grid-cols-2'>
        {Tshirts.map((tshirt, index) => (
          <TShirt key={index} url={tshirt.url} name={tshirt.name} tshirts={Tshirts} />
        ))}
      </div>
      <div className='flex justify-center'>
        <button className="bg-black text-white w-32 h-12 mx-auto mb-20 rounded-xl" onClick={() => {
          navigate("/categories/premium-oversize")
        }}>View All</button>
      </div>
    </div>
  )
}

function Test() {
  <OverSiContext.Provider>
    OverSi
  </OverSiContext.Provider>
}

export default OverSizedTees
