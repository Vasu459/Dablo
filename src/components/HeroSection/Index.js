import React , {useState} from 'react'
import Video from '../../videos/video.mp4'
import {VideoBg, HeroBg, HeroConatainer , HeroBtnWrapper, HeroContent, HeroH1 ,HeroP , ArrowRight ,ArrowForward } from './HeroElements.js'
import {Button} from  '../ButtonElement'  



    const Hero = () => {
        
        const [hover, setHover] = useState(false);

        const onHover = () => {
            setHover(!hover);
        }
    

    return (
       <HeroConatainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Virtual Banking Made easy
            </HeroH1>
            <HeroP>
                Sign up for a new account today and recieve $250 in credit towards your next payment.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} 
                primary="true" 
                dark="true"

                >
                    Get Started {hover ? <ArrowForward/> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
       </HeroConatainer>
    )
}

export default Hero
