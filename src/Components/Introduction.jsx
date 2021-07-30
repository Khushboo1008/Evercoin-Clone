import React from 'react'
import  "../Components/Introduction.scss"
import Img from "./../assets/image1.png"
import playstore from "./../assets/appstore.svg"
import googleplay from "./../assets/googleplay.svg"
import Img3 from '../assets/image3.png'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'





export const Introduction = () => {
    return (
        <div>

        <div className="intro">
            <div>
                <div className="intro_item">
                    Safest Cryptocurrency Wallet & Exchange
                </div>
                <p className="intro_item_1" >Your Key, Your Crypto.</p>
                <p className="intro_item_1" >Evercoin is now integrated with YubiKey to provide the safest cryptocurrency wallet.</p>
                <div className="desk_view">
                    <p className="intro_item_2" >Enter your phone number to download the app</p>
                    <div className="input">
                        <div className="mob_input">
                            <PhoneInput
                            country='de'
                            regions={'europe'}
                            />                     
                        </div>
                        <div>
                        <a href="#home"className="button">Get the App</a>
                        </div>
                    </div>
                </div>
                <div className="mob_view">
                    <img src={playstore} alt="cannot be loaded"></img>
                    <img src={googleplay} alt="cannot be loaded"></img>
                </div>
            </div>  
            <div className="desk_img">
                <img className="Image" src={Img} alt="cannot be loaded"></img>
            </div>
        </div>
            <div className="mob_img">
                <img className="Image" src={Img3} alt=""></img>
            </div>
        </div>
    )
}
