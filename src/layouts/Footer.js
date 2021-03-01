import React from 'react'
import { useState } from 'react'
import { FooterWrapper, FooterSection } from '../assets/styles/layouts/footer';
import { Container } from "../assets/styles/components/container";

const Footer = () => {
    const [year] = useState(2021);
    const [company] = useState("avella.my")

    const CurrentYear = () => {
        return new Date().getFullYear()
    }

    const Copyright = () => {
        return CurrentYear() > year ? year + ' - ' + CurrentYear() : CurrentYear()
    }

    return (
        <FooterWrapper>
            <Container>
                <FooterSection>
                    &copy; { Copyright() } { company }. All Right Reserved. 
                </FooterSection>
            </Container>
        </FooterWrapper> 
     );
}
 
export default Footer;
