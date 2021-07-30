import React from 'react'
import  "../Components/KeyModule.scss"
import Img from '../assets/image2.png'


export const KeyModule = () => {
    return (
        // <div>
        <div className="main">
            <div className="content">
                <div className="box">
                    <div className="green_line"></div>
                </div>
                <div className="main_text_1">
                    Never Lose Your Private Keys
                </div>
                <div className="main_text_2">
                Losing your keys can mean losing your money forever. Not so with Evercoin's 
                non-custodial patent-pending wallet backup and recovery service, made even easier with 
                help from our top rated in-app customer support.
                </div>
            </div>
            <div className="green_image">
                <img className="image" src={Img} alt=""></img>
            </div>
        </div>
        // </div>
    )
}
