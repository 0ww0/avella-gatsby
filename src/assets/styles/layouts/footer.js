import styled from "styled-components";
import { 
    flex, 
    fontSize } from '../mixins/_mixin';

export const FooterWrapper = styled.footer`
   
`;

export const FooterSection = styled.div`
    position: relative;
    ${ flex({ axis : "row" }) };
    justify-content: center;
    align-items: center;
    width: 100%;
    ${ fontSize({ size : "12" }) };
    padding: 20px;
`;