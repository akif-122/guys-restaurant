import React, { useState } from 'react'
import "./Header.css"

import { FaTimes } from 'react-icons/fa';
import { FaBars, FaLocationDot, FaPlus } from "react-icons/fa6";

import { Link } from 'react-router-dom'

import logo from "../../assets/imgs/site-logo.webp";

const Header = () => {
    const [mobileNav, setMobileNav] = useState(false)
    return (
        <>
            <header>

                <div className={` ${mobileNav ? "active" : ""} mobile-Menu`}>
                    <ul className='list-unstyled'>
                        <li>
                            <Link to={"#"} >CLOSEST RETAURANT </Link>
                        </li>
                        <li>
                            <Link to={"#"} >Order Now </Link>
                        </li>
                        <li>
                            <Link to={"#"} >Cater Now </Link>
                        </li>
                        <li>
                            <Link to={"#"} >Menu </Link>
                        </li>
                        <li>
                            <Link to={"#"} >Home </Link>
                        </li>

                        <li>
                            <Link to={"#"} >Locations </Link>
                        </li>
                    </ul>
                </div>

                <nav className='navbar navbar-brand-lg topNav p-0'>
                    <Link to={"#"} className='logo'>
                        <img src={logo} width={107} alt="" />
                    </Link>

                    <div className="navItem d-flex align-items-stretch h-100">
                        <ul className='list-unstyled d-flex align-self-stretch  h-100 d-none d-lg-flex'>
                            <li>
                                <Link to={"#"} >CLOSEST RETAURANT <FaLocationDot /></Link>
                            </li>
                            <li>
                                <Link to={"#"} >Order Now <FaPlus /></Link>
                            </li>
                            <li>
                                <Link to={"#"} >Cater Now <FaPlus /></Link>
                            </li>
                        </ul>

                        <Link href="#" className='order-btn align-self-center d-block d-lg-none'>Order Now <FaPlus /></Link>

                        <button className='navToggler d-block d-lg-none' onClick={() => setMobileNav(!mobileNav)}>
                            {mobileNav ? <FaTimes /> : <FaBars />}
                        </button>

                        <button className='navToggler d-none d-lg-block ' >
                            <FaBars />
                        </button>
                    </div>
                </nav>
            </header >
        </>
    )
}

export default Header