import React from 'react'
import  "../Components/Footer.scss"
import { Carousel } from './Carousel'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import playstore from "./../assets/appstore.svg"
import googleplay from "./../assets/googleplay.svg"


export const Footer = () => {
    return (
        <div className="footer">
            <p className="footer_head">Get On Board</p>
            <p className="footer_content">Take control of your digital assets and enjoy the integrated exchange experience.</p>
            <div className="mob_input">
                <div class="input">
                <PhoneInput
                placeholder="+1 Phone Number"
                />                                                  
                </div>
                <div>
                    <a href="#home"className="button">Get the App</a>
                </div>
            </div>
            <div className="mob_view">
                    <img src={playstore} alt="cannot be loaded"></img>
                    <img src={googleplay} alt="cannot be loaded"></img>
            </div>
            <Carousel/>
            <div className="list">
                <a href="#home" className="full_list">See full list →</a>
            </div>
        </div>
    )
}
