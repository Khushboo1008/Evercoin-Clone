import React from 'react'
import Slider from 'react-slick';
import { SETTINGS } from '../helpers/Carousel';
import  "../Components/Carousel.scss"
import "slick-carousel/slick/slick.css"
import btc from "../assets/btc.png"
import bitcoin_cash from "../assets/bitcoin_cash.png"
import usdc from "../assets/usdc.png"
import bittorrent from "../assets/bittorrent.png"
import dcr from "../assets/dcr.jpg"
import bsv from "../assets/bsv.png"
import Qtum from "../assets/Qtum.png"
import Dogecoin from "../assets/Dogecoin.png"
import btc_gold from "../assets/btc_gold.png"
import zcash from "../assets/zcash.png"
import Ethereum_classic from "../assets/Ethereum_classic.png"
import Dash from "../assets/Dash.png"
import xlm from "../assets/xlm.png"
import litecoin from "../assets/litecoin.png"
import Ethereum from "../assets/Ethereum.png"
import trx from "../assets/trx.png"
import stellar from "../assets/stellar.png"
import cardona from "../assets/cardona.png"

export const Carousel = () => {
    return (
        <div className="main_carousel">
            <Slider {...SETTINGS(true,true, 5, 1)} className="slider">
                <>
                    <div>
                        <img src={btc} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img src={usdc} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img src={bittorrent} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img style={{ borderRadius:"100%" }} src={dcr} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img style={{ borderRadius:"100%" }} src={bsv} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img src={Qtum} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img src={Dogecoin} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img src={btc_gold} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img src={zcash} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img src={Ethereum_classic} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img style={{ borderRadius:"100%" }} src={Dash} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img style={{background:"orange",borderRadius:"100%",color:"white"}}src={bitcoin_cash} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img style={{ borderRadius:"100%" }}src={xlm} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img style={{ background:"whitesmoke",borderRadius:"100%" }}src={litecoin} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img style={{ borderRadius:"130%" }} src={Ethereum} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img src={trx} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img style={{ borderRadius:"100%" }} src={stellar} alt="not found"></img>
                    </div>
                </>
                <>
                    <div>
                        <img src={cardona} alt="not found"></img>
                    </div>
                </>
                

            </Slider>
        </div>
    )
}
