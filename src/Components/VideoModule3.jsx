import React from 'react'
import video from "../assets/video3.webm"
import  "../Components/VideoModule3.scss"


export const VideoModule3 = () => {
    return (
        <div className="video_section_bottom">
            <div className="section_main">
                <div className="desk_section_video">
                    <video width="474px" height="950px" autoPlay muted loop src={video} type="video/mp4">
                    </video>
                </div>
                <div className="section_content">
                    <div className="line">
                    <div className="green_line"></div>
                    </div>
                    <div className="section_text">
                        <p className="section_text_1">Safe from Exchange Hacking</p>
                        <p className="section_text_2">Non-custodial means that Evercoin never has your private key--and all transactions get settled on the
                        blockchain. So the user's assets are safe from exchange hacking and there are never withdrawal limits or fees.</p>
                    </div>
                </div>
            </div>
            <div className="mob_section_video">
                <video className="mob_video" autoPlay muted loop src={video} type="video/mp4">
                </video>
            </div>
        </div>
    )
}
