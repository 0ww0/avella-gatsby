import { css } from 'styled-components';

export const baseBorder = css`
    border-color: rgba(${ props => ` ${ props.theme.borderColor }, .2 `});
`;

export const baseShadow = css`
    box-shadow: ${ props => ` 0 2px 5px rgba(${ props.theme.boxShadow }, .2) `};
`;

export const border = ({ rgba, opacity = 1 }) => css`
    border-color: rgba(${ rgba }, ${ opacity });
`;

export const background = ({ rgba, opacity = 1 }) => css`
    background-color: rgba(${ rgba }, ${ opacity });
`;

export const color = ({ rgba, opacity = 1 }) => css`
    color: rgba(${ rgba }, ${ opacity });
`;

export const fontSize = ({ size, base = 16 }) => css`
    font-size: ${size}px;
    font-size: calc(${size / base} * 1rem);
`;

export const fontWeight = ({ weight = 400 }) => css`
    font-weight: ${ weight };
`;

export const ellipsis = ({ width = "100%" }) => css`
    display: inline-block;
    max-width: ${width};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
`;

const timing = "cubic-bezier(.25, .46, .45, .94)";

export const tran = ({ property = "none", duration = ".3s"  }) => css`
    transition: ${ duration } ${ timing };
    transition-property: ${ property };
`;

export const anima = ({ name, duration = ".3s", iteration = "infinite"  }) => css`
    animation: ${ duration } ${ timing } ${ iteration };
    animation-name: ${ name };
`;

export const flex = ({ axis }) => css`
    display: flex;
    flex-flow: ${ axis } nowrap;
    flex-direction: ${ axis };
`;
