import React from "react"
import { ThemeProvider } from "styled-components";

import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { GlobalStyles } from "../assets/styles/global"
import useTheme from "../hooks/useTheme"

const AppLayout = ({ children }) => {
    const { theme, mode, toggleMode } = useTheme()
  
    return (
        <ThemeProvider theme={ theme }>
            <div id="root">
                <GlobalStyles />
                <Header mode = { mode } handleToggle = { toggleMode } />
                <Main mode = { mode } children = { children } />
                <Footer />
            </div>
        </ThemeProvider>
     );
}
 
export default AppLayout;