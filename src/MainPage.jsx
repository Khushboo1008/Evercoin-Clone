import React from 'react'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Introduction } from './Components/Introduction'
import { KeyModule } from './Components/KeyModule'
import { VideoModule1 } from './Components/VideoModule1'
import { VideoModule2 } from './Components/VideoModule2'
import { VideoModule3 } from './Components/VideoModule3'
import { VideoModule4 } from './Components/VideoModule4'

export const MainPage = () => {
    return (
        <div style={{backgroundColor:"#ffffff"}}>
            <Header/>
            <Introduction/>
            <KeyModule/>
            <VideoModule1/>
            <VideoModule2/>
            <VideoModule3/>
            <VideoModule4/>
            <Footer/>
        </div>
    )
}
