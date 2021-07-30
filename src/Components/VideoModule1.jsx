import React from 'react'
import video from "../assets/video1.mp4"
import mob_video from "../assets/mob_video1.mp4"

import  "../Components/VideoModule1.scss"

export const VideoModule1 = () => {
    return (
        <div className="section">
            <div className="section_main">
                <div className="desk_section_video">
                    <video width="474px" height="950px" autoPlay muted loop src={video} type="video/mp4">
                    </video>
                </div>
                <div className="desk_section_content">
                    <div className="line">
                    <div className="green_line"></div>
                    </div>
                    <div className="section_text">
                        <p className="section_text_1">Safe from Exchange Hacking</p>
                        <p className="section_text_2">Non-custodial means that Evercoin never has your private key--and all transactions get settled on the
                        blockchain. So the user's assets are safe from exchange hacking and there are never withdrawal limits or fees.</p>
                    </div>
                </div>
                <div className="mob_section_video">
                    <video className="mob_vid" autoPlay muted loop src={mob_video} type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
    )
}
