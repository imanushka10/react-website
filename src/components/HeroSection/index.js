import React from 'react'
import Video from "../../videos/video.mp4"

import {
    HeroContainer,
    HeroBg,
    VideoBg
} from "./HeroElements"

const HeroSection = () => {
    return (
        <HeroContainer>

            <HeroBg>

                <VideoBg autoPlay muted loop src={Video} type="video/mp4"></VideoBg>
            </HeroBg>
        </HeroContainer >
    )
}

export default HeroSection
