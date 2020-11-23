import React from 'react'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesP,
    ServicesH2
} from "./ServicesElements"
import Hero from "../../images/Hero.svg"
import Icon2 from "../../images/Icon2.svg"
import Icon3 from "../../images/Icon3.svg"

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Hero}></ServicesIcon>
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>we help reduce fees and increase your oveall revenue</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}></ServicesIcon>
                        <ServicesH2>Virtual offices</ServicesH2>
                        <ServicesP>we help reduce fees and increase your oveall revenue</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}></ServicesIcon>
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>we help reduce fees and increase your oveall revenue</ServicesP>
                    </ServicesCard>

                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
