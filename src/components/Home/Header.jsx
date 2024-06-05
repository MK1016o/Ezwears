import React from 'react'
import logo from '../../assets/logo-small.webp'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='flex justify-around align-middle py-4 sticky top-0 z-10 bg-white'>
                <div className='text-center hidden md:block'>
                    <ul className='flex justify-between'>
                        <li className='py-2 px-4 font-semibold text-gray-700 cursor-pointer'>
                            <a onClick={() => {
                                navigate("/privacy-policy")
                            }}>Privacy Policy</a>
                        </li>
                        <li className='py-2 px-4 font-semibold text-gray-700 cursor-pointer'>
                            <a onClick={() => {
                                navigate("/refund-policy")
                            }}>Refund Policy</a>
                        </li>
                        <li className='py-2 px-4 font-semibold text-gray-700 cursor-pointer'>
                            <a onClick={() => {
                                navigate("/terms-and-conditions")
                            }}>Terms & Conditon</a>
                        </li>
                    </ul>
                </div>

                <div >
                    <img src={logo} alt="logo"  className='h-10 w-12 cursor-pointer' onClick={() => {
                        navigate("/")
                    }}/>
                </div>

                <div>
                    <ul className='flex justify-between'>
                        <li className='py-2 px-4 font-semibold text-blue-800'>
                            <input type="text" placeholder='Search' className='px-2 border-2 border-gray-200 rounded-lg' onKeyDown={(ev) => {
                                if(ev.key === 'Enter') {
                                    navigate('/search', {state: {name: ev.target.value}})
                                }
                            }}/>
                        </li>
                        <li className='py-2 px-4 font-semibold text-blue-800'>
                            <a href="#">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Header