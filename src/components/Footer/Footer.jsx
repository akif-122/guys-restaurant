import React from 'react'
import "./Footer.css";

import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa6';

import ftlogo from "../../assets/imgs/site-logo.webp";
import appStore from "../../assets/imgs/app-store-badge.webp";
import playStore from "../../assets/imgs/google-play-badge.webp";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="row text-center text-lg-start">
                    <div className="col-lg-1 mx-auto mb-4">
                        <div className="ft-logo mx-auto">
                            <img src={ftlogo} width={70} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <ul className='ft-link'>
                            <li><Link to="#">CONTACT US</Link></li>
                            <li><Link to="#">FRANCHISE</Link></li>
                            <li><Link to="#">FRANCHISE DISCLAIMER</Link></li>
                            <li><Link to="#">HALAL CERTIFICATION</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2">
                        <ul className='ft-link'>
                            <li><Link to="#">CAREERS</Link></li>
                            <li><Link to="#">PRIVACY POLICY</Link></li>
                            <li><Link to="#">TERMS & CONDITIONS</Link></li>
                            <li><Link to="#">LOCATIONS LIST</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-xl-5 ms-lg-auto">
                        <div className="social-link d-flex flex-column flex-lg-row align-items-center mb-4">
                            <p className='mb-3 mb-lg-0 ' >FOLLOW US!</p>

                            <div className="d-flex align-items-center flex-wrap">
                                <Link to="#"><FaFacebookF /></Link>
                                <Link to="#"><FaTwitter /></Link>
                                <Link to="#"><FaInstagram /></Link>
                                <Link to="#"><FaYoutube /></Link>
                                <Link to="#"><FaTiktok /></Link>
                            </div>

                        </div>

                        <div className="our-app d-flex align-items-center flex-wrap mt-5 mt-lg-0">
                            <h4 className='mb-0'>DOWNLOAD OUR APP!</h4>
                            <Link to={"#"}>
                                <img src={appStore} alt="" />
                            </Link>
                            <Link to={"#"}>
                                <img src={playStore} alt="" />
                            </Link>
                        </div>

                    </div>




                </div>
            </footer>
            <section className='btm-section d-flex flex-column flex-lg-row align-items-center justify-content-between'>
                <span>© 2024 The Halal Guys</span>
                <h4 className='my-4 my-lg-0'>WE ARE DIFFERENT</h4>
                <span>Website by Gourmet Marketing</span>
            </section>
        </>
    )
}

export default Footer