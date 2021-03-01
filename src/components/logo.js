import React from "react"
import ImgDark from "../assets/images/avella-logo.svg"
import ImgLight from "../assets/images/avella-logo-alt.svg"
import styled from "styled-components"

const LogoHolder = styled.div`
    width: 200px;
    margin: auto;
    img {
        pointer-events: none;
        outline: none;

        &:focus {
            outline: none;
        }
    }
`;

const Logo = ({ mode }) => {
    return ( 
        <LogoHolder>
            { mode ? 
                ( <img src={ImgLight} alt="avella logo"/> ) 
                : 
                ( <img src={ImgDark} alt="avella logo"/> )
            }
        </LogoHolder>
    )
}
 
export default Logo;