import React, { useEffect, useRef } from 'react'
import MenuSlider from '../../components/Slider/MenuSlider';
import "./Home.css";

import cardImg1 from "../../assets/imgs/bg-aboutus-2x.jpg";
import cardImg2 from "../../assets/imgs/cta-rewards-2x.jpg";
import cardImg3 from "../../assets/imgs/THGcatering_40_Desktop-2x.jpg";
import Video from "../../assets/videos/Web-Banner-V3.mp4"
import { Link } from 'react-router-dom';

const Home = () => {



    const vidRef = useRef();
    useEffect(() => { vidRef.current.play(); }, []);
    return (
        <>
            <section className='hero-section'>
                <div className="video-wrapper">
                    <video
                        ref={vidRef}
                        muted
                        autoPlay
                        loop
                        width={"100%"}
                        height={"100%"}
                        src={Video}>

                    </video>
                </div>
            </section>

            {/* MENU SECTION START */}
            <section className='menu-section'>
                <h2 className='text-center'>Menu</h2>

                <div className="menu-items">
                    <MenuSlider />
                </div>

            </section>
            {/* MENU SECTION END */}


            {/* CARD SECTION START */}
            <section className='rs-cards-container'>
                <div className="row g-0">
                    <div className="col-md-6 ">
                        <div className="rs-card rs-card-1">
                            {/* <img src={cardImg1} width={"100%"} alt="" /> */}

                            <div className="rs-card-text">
                                <h2><Link to={"#"}>About Us</Link></h2>

                                <Link to="#">See More</Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="rs-card rs-card-2" >
                            {/* <img src={cardImg2} width={"100%"} alt="" /> */}
                            <div className="rs-card-text">
                                <h2><Link to={"#"}>Rewards</Link></h2>

                                <Link to="#">Learn More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="text-box text-center">
                            <p>Chicken, Gyros, and Falafel Platters. The Authentic American Halal Food. Since 1990.</p>
                        </div>
                    </div>

                    <div className="col-12 ">
                        <div className="rs-card rs-card-3">
                            {/* <img src={cardImg3} width={"100%"} alt="" /> */}
                            <div className="rs-card-text centered">
                                <h3>CATERING</h3>
                                <p>FULL SERVICE CATERING AVAILABLE</p>
                                <Link to="#" className='m-btn'>Order Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* CARD SECTION END*/}



        </>
    )
}

export default Home