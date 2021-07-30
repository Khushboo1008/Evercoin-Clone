import React from 'react'
import img from "../assets/evercoincopyright.svg"
import  "../Components/Copyright.scss"


export const Copyright = () => {
    return (
        <div class="copyright">
            <div className="content">
                <div>
                    <img className="image" src={img} alt="not"></img>
                </div>
            <div class="container">
                <span>Copyright © 2018 Evercoin Inc. All rights reserved</span>
                <a href="#home">Privacy Policy</a>
                <a href="#home">Terms of Use</a>
            </div>
            </div>
        </div>
    )
}
