import React from 'react'
import { HeaderWrapper, HeaderSectionMode, ModeHolder } from '../assets/styles/layouts/header';
import { ContainerHeight } from '../assets/styles/components/container';
import { BiSun, BiMoon} from "react-icons/bi";

const Header = ({ mode, handleToggle }) => {
    return (
        <HeaderWrapper>
            <ContainerHeight>
                <HeaderSectionMode>
                    <ModeHolder>
                        { mode ? 
                            ( < BiMoon onClick={handleToggle}  /> ) 
                        : 
                            ( < BiSun onClick={handleToggle} /> )
                        }
                    </ModeHolder>
                </HeaderSectionMode>
            </ContainerHeight>
        </HeaderWrapper>
    );
}
 
export default Header;