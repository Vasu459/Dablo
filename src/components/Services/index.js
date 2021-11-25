import React from 'react'
import {ServicesCard, ServicesContainer,ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper
 } from './ServicesElements'

 import Icon1 from '../../images/wallet.svg'
 import Icon2 from '../../images/benifits.svg'
 import Icon3 from '../../images/Data-file.svg'

const Services = () => {
    return (


            <ServicesContainer id="services">
                <ServicesH1>
                    Our Services
                </ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>We help reduce your fees amd increase your revenue. </ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>You can access our services from anywhere in the world.</ServicesP>
                    </ServicesCard>
                    
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>You can access our services from anywhere in the world.</ServicesP>
                    </ServicesCard>
                    
                </ServicesWrapper>
            </ServicesContainer>
    )
}

export default Services
