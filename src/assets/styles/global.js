import { createGlobalStyle } from 'styled-components';

import './font.css';
import {
    background, 
    color,
    tran } from './mixins/_mixin';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        ${ tran };
    }

    html {
        font-family: Roboto, sans-serif;
        font-size: 16px;
        line-height: 1.5; 
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
    }

    body {
        ${ background({ rgba: (props) => props.theme.background }) };
        ${ color({ rgba: props => props.theme.textColor }) };
        ${ tran({ property: "color, background-color" }) };
        height:100%;
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol {
        margin: 0;
    }

    hr {
        box-sizing: content-box; 
        height: 0; 
        overflow: visible;
    }

    pre {
        font-family: monospace, monospace; 
        font-size: 1em;
    }

    label {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
        background-color: transparent;
        outline: 0;
    }

    img {
        display: block;
        width: 100%;
        max-width: 100%;
    }

    abbr[title] {
        border-bottom: none; 
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace, monospace; 
        font-size: 1em;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; 
        font-size: 100%; 
        line-height: 1.15; 
        margin: 0;
    }

    button,
    input { 
        overflow: visible;
    }

    button,
    select { 
        text-transform: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    legend {
        box-sizing: border-box; 
        color: inherit;
        display: table; 
        max-width: 100%; 
        padding: 0;
        white-space: normal; 
    }

    progress {
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box; 
        padding: 0;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        -webkit-appearance: textfield; 
        outline-offset: -2px;
    }

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button; 
        font: inherit;
    }

    details {
        display: block;
    }

    summary {
        display: list-item;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none;
    }

    ::selection {
        background: black;
        color: white;
    }

    .no-scroll{
        overflow: hidden;
    }

    .no-scroll-x{
        overflow-x: hidden;
    }

    .no-scroll-y{
        overflow-y: hidden;
    }
    
    #root {
        position: relative;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: 60px minmax(0, 1fr) auto;
        grid-template-areas:
            'header'
            'main'
            'footer';
        min-height: 100%;
        ${ tran({ property : "all" }) };

        header {
            position: relative;
            grid-area: header;
        }

        main {
            position: relative;
            grid-area: main;
        }

        footer {
            position: relative;
            grid-area: footer;
        }
    }

    #___gatsby {
        height: inherit;
    }

    #gatsby-focus-wrapper {
        height: inherit;
    }
`