import React from 'react'
import Header from './Home/Header'
import Footer from './Home/Footer'
import { useLocation } from 'react-router-dom'
import Asset5 from '../assets/asset 5.webp'
import Asset6 from '../assets/asset 6.webp'
import Asset7 from '../assets/asset 7.webp'
import Asset8 from '../assets/asset 8.webp'
import Asset9 from '../assets/asset 9.webp'
import NotFound from './NotFound'
import TShirt from './Home/TShirt'

const Search = ({ name }) => {
    const location = useLocation();
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

    const selected = Tshirts.filter(Tshirt =>
        Tshirt.name === location.state.name
    )
    return (
        <>
            <Header></Header>

            {selected.length === 0 ? <NotFound name={"Shirt Not Found"}></NotFound> :
                (<div className='m-24 grid gap-8 md:grid-cols-3 sm:grid-cols-2'>
                    <TShirt url={selected[0].url} name={selected[0].name}></TShirt>
                </div>)}
            <Footer></Footer>
        </>
    )
}

export default Search
