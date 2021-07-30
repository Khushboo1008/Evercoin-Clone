import React from 'react'
import video from "../assets/video4.mp4"
import  "../Components/VideoModule4.scss"


export const VideoModule4 = () => {
    return (
        <div className="vid_section">
            <div className="section_main">
                <div className="section_content">
                    <div className="line">
                        <div className="green_line"></div>
                    </div>
                    <div className="section_text">
                        <p className="section_text_1">Protected by Biometric Factors</p>
                        <p className="section_text_2">Unlike traditional Hardware Wallets, Evercoin's mobile-first design enables Yubikey-powered hardware 
                        security to be combined with on-device biometric authentication factors like fingerprint and face. It also allows users
                        to quickly and securely trade in an instant wherever and whenever they need.</p>
                    </div>
                </div>
                <div className="desk_section_video">
                    <video width="624px" height="878px" autoPlay muted loop >
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="mob_section_video">
                    <video className="mob_video" autoPlay muted loop >
                        <source src={video} type="video/mp4"/>
                    </video>
            </div>
        </div>
    )
}
