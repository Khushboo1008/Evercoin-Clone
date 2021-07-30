import React from 'react'
import  "../Components/Footer.scss"
import { Carousel } from './Carousel'


export const Footer = () => {
    return (
        <div className="footer">
            <p className="footer_head">Get On Board</p>
            <p className="footer_content">Take control of your digital assets and enjoy the integrated exchange experience.</p>
            <Carousel/>
        </div>
    )
}
