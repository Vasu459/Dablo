import React from 'react'
import Hero from '../HeroSection/Index';
import InfoSection from '../InfoSection/Index';

import Services from '../Services/'

import {
    homeObjOne , 
    homeObjTwo ,
    homeObjThree,
    homeObjFour,
} from '../InfoSection/Data'
import Footer from '../Footer';

function Home() {



    return (
        <>
        <Hero/>
        <InfoSection {...homeObjOne }/>
        <InfoSection {...homeObjTwo }/>
        <Services />
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjFour} />
        <Footer/>

        </>
    )
}

export default Home
