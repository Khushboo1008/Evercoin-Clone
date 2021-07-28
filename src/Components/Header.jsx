import React from 'react'
import  "../Components/Header.scss"
import Img from "../assets/evercoin-logo.svg"

export const Header = () => {
    return (
            <div className="header">
                {/* <div className="nav"> */}
                    <div>
                        <img src={Img} alt="cannot be loaded"/>
                    </div>
                    <div>
                        <a>HOME</a>
                    </div>
                {/* </div> */}
            </div>
    )
}
