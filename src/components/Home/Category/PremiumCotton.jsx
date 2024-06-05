import React from 'react'
import Asset9 from '../../../assets/asset 9.webp'
import Asset6 from '../../../assets/asset 6.webp'
import Asset5 from '../../../assets/asset 5.webp'
import Asset7 from '../../../assets/asset 7.webp'
import Asset8 from '../../../assets/asset 8.webp'
import TShirt from '../TShirt'
import Header from '../Header'
import Footer from '../Footer'
import CategoryNav from './CategoryNav'
import Filter from './Filter'

const PremiumCotton = () => {
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
        <>
            <Header></Header>
            <div className='mx-8 md:mx-28'>
                <CategoryNav name={"Premium Oversized cotton T-shirt"} navigation={"premium-cotton"}></CategoryNav>
                <div className="flex justify-between flex-col md:flex-row">
                    <Filter></Filter>
                    <div className='m-12 md:m-24 gap-8 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                        {Tshirts.map((tshirt, index) => (
                            <TShirt key={index} url={tshirt.url} name={tshirt.name} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default PremiumCotton
