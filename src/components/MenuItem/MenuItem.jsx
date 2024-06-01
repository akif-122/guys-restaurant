import React from 'react'
import "./MenuItem.css"
import img1 from "../../assets/imgs/chicken-platter-300x300.png";
import { Link } from 'react-router-dom';

const MenuItem = ({ data }) => {
    // const { link, text, img } = data;
    return (
        <>
            <div className="menuItem">
                <Link to={"#"}>
                    <img src={img1} alt="" />
                </Link>

                <h4>Chicken Platter</h4>

            </div>
        </>
    )
}

export default MenuItem