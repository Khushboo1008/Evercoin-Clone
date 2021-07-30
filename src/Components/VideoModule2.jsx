import React from 'react'
import video from "../assets/video2.webm"
import  "../Components/VideoModule2.scss"


export const VideoModule2 = () => {
    return (
        <div className="video_section">
            <div className="section_main">
                <div className="section_content">
                    <div className="line">
                    <div className="green_line"></div>
                    </div>
                    <div className="section_text">
                        <p className="section_text_1">Safe Send & Receive</p>
                        <p className="section_text_2">The YubiKey encrypts your private key so it can't be found on your phone. Once you have 
                        paired the YubiKey to the phone, no transactions can be signed or sent without inserting that key.</p>
                    </div>
                </div>
                <div className="desk_section_video">
                    <video width="474px" autoPlay muted loop >
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="mob_section_video">
                <video class="mob_video" autoPlay muted loop >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}
