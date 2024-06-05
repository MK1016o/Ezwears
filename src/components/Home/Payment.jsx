import React from 'react'
import Visa from '../../assets/visa.svg'
import Debit from '../../assets/debit-card.svg'
import Rupay from '../../assets/Rupay.svg'
import NetBanking from '../../assets/net-banking.svg'
import Bhim from '../../assets/bhim.svg'



const Payment = () => {
  return (
    <div className='flex flex-col items-center'>
        <p className='py-2 text-sm font-semibold'>100% PAYMENT PROTECTION</p>
        <div className='flex'>
            <img src={Visa} alt="visa" />
            <img src={Debit} alt="debit" />
            <img src={Rupay} alt="rupay" />
            <img src={NetBanking} alt="net-banking" />
            <img src={Bhim} alt="bhim" />
        </div>
    </div>
  )
}

export default Payment
