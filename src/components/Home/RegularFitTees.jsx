import React from 'react'
import Asset9 from '../../assets/asset 9.webp'
import Asset6 from '../../assets/asset 6.webp'
import Asset5 from '../../assets/asset 5.webp'
import Asset7 from '../../assets/asset 7.webp'
import Asset8 from '../../assets/asset 8.webp'
import TShirt from './TShirt'
import { useNavigate } from 'react-router-dom'

const RegularFitTees = () => {
  const navigate = useNavigate();
  const Tshirts = [
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
    },
    {
      url: Asset9,
      name: "Premium Oversized SILVER cotton T-shirt"
    },
    {
      url: Asset5,
      name: "Black Tee"
    },
  ]
  return (
    <div>
      <div>
        <h2 className='py-24 text-center font-semibold text-4xl'>Regular fit Tees</h2>
        <div className='m-24 grid gap-8 md:grid-cols-3 sm:grid-cols-2'>
          {Tshirts.map((tshirt, index) => (
            <TShirt key={index} url={tshirt.url} name={tshirt.name} />
          ))}
        </div>
        <div className='flex justify-center'>
          <button className="bg-black text-white w-32 h-12 mx-auto mb-20 rounded-xl" onClick={() => {
            navigate("/categories/premium-cotton")
          }}>View All</button>
        </div>
      </div>
    </div>
  )
}

export default RegularFitTees
