import styled from "styled-components";
import { device } from '../mixins/_media';

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding-left: 14px;
    padding-right: 14px;
    margin-left: auto;
    margin-right: auto;

    @media ${device.xs} {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }

    @media ${device.sm} {
        padding-left: 25px;
        padding-right: 25px;
    }
`;

export const ContainerSlim = styled(Container)`
    max-width: 780px;
`;

export const ContainerFluid = styled(Container)`
    width: 100%;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
`;

export const ContainerHeight = styled(Container)`
    height: 100%;
`;