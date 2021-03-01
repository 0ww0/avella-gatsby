import React from 'react'
import { MainWrapper } from "../assets/styles/layouts/main"
import { Container } from "../assets/styles/components/container"
import Logo from "../components/logo"

const Main = ({ mode, children }) => {
    return ( 
        <MainWrapper >
            <Container>
                <Logo mode = { mode }/>
                { children }
			</Container>
        </MainWrapper>
    );
}
 
export default Main;
