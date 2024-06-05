import React from 'react'
import Header from './Home/Header'
import Footer from './Home/Footer'

const RefundPolicy = () => {
  return (
    <>
        <Header></Header>
        <div className='mx-28'>
            <h2 className="font-semibold text-3xl py-10">Refund Policy</h2>
            <p className='leading-7'>Our Return and Replacement Policy was last updated 06 April 2024 <br />
             Thank you for shopping at ezwears.in. <br />
             If for any reason, you are not completely satisfied with a purchase, we invite you to review our policy on refunds and returns. <br />
             The following terms are applicable for any products that you’ve purchased from us.</p>

            <h3 className='font-medium text-2xl'>Interpretation and Definitions</h3>
                
            <h4 className="py-10 font-bold text-2xl">Interpretation</h4>
            <p className='py-2'>The words in which the initial letter is capitalised have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in the plural.</p>

            <h4 className="pb-10 font-bold text-xl">Definitions</h4>
            <p className='leading-7'>For the purposes of this Return and Refund Policy: <br />
            “Company” (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to EZ.Wears <br />
            “Goods” refers to the items offered for sale. <br />
            “Orders” means a request by you to purchase goods from us. <br />
            “Website” refers to ezwears.in, accessible from https://ezwears.in <br />
            “You” means the individual accessing or using the service, or the company, or other legal entity on behalf of which such individual is accessing or using the service, as applicable.</p>
            
            <h4 className="pb-10 font-bold text-xl">Your Order Cancellation Rights</h4>
            <p className='leading-7'>
                You are entitled to cancel your order within 24 hours without giving any reason for doing so. <br />
                In order to exercise your right of cancellation, you must inform us of your decision by means of a clear statement. You can inform us of your decision by: <br />
                By sending us an email: ezs.shared@gmail.com <br />
                We will reimburse you no later than 14 days from the day on which we receive the returned Goods. We will use the same means of payment as you used for the Order, and you will not incur any fees for such reimbursement.
            </p>

            <h4 className="pb-10 font-bold text-xl">Conditions for Replacement</h4>
            <p className='leading-8'>
                In order for the Goods to be eligible for a replacement, please make sure that:
            </p>
            <ul className="list-disc px-10">
                <li>The goods were purchased in the last 14 days</li>
                <li>The goods are in the original packaging</li>
                <li>The following goods cannot be returned:</li>
                <li>The supply of goods is made to your specifications or clearly personalized.</li>
                <li>The supply of goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                <li>The supply of goods that are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                <li>The supply of goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
            </ul>
            <p className='leading-8'>
            We reserve the right to refuse returns of any merchandise that does not meet the above return conditions at our sole discretion.
            </p>
        </div>
        <Footer></Footer>
    </>
  )
}

export default RefundPolicy
