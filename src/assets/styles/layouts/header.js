import styled from 'styled-components';

import {
    flex, 
    fontSize,
    tran } from '../mixins/_mixin';

export const HeaderWrapper = styled.header`
    
`;

export const HeaderSection  = styled.div`
    position: relative;
    ${ flex({ axis : "row" }) };
    justify-content: space-between;
    align-items: center;
    height: inherit;
`;

export const HeaderSectionMode = styled(HeaderSection)`
    justify-content: flex-end;
`;

export const LogoHolder = styled.div`
    width: 100%;
    max-width: 80px;
    padding: 6px;

    svg {
        width: 100%;
        height: 100%;
        fill: rgba(${(props) => props.theme.textColor}, 1);
        ${ tran({ property : "fill" }) }
    }
`;

export const ModeHolder = styled.div`
    ${ fontSize({ size : "20" }) };
    padding: 6px;

    svg {
        fill: rgba(${(props) => props.theme.textColor}, 1);
        ${ tran({ property : "fill" }) }
    }
`;

