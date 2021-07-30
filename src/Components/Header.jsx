import React from 'react'
import  "../Components/Header.scss"
import Img from "../assets/evercoin-logo.svg"

export const Header = () => {
    return (
            <div className="header">
                    <div className="image">
                        <img src={Img} alt="cannot be loaded"/>
                    </div>
                    <div className="nav">
                        <div className="nav_subpart">HOME</div>
                        <div className="nav_subpart">FAQ</div>
                    </div>
                    <div className="mob_nav">
                        <div className="nav_subpart">FAQ</div>
                    </div>

            </div>
    )
}
