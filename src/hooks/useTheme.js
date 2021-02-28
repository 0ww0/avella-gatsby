/* eslint-disable import/no-anonymous-default-export */
import { useState, useEffect } from "react";
import { LightTheme, DarkTheme } from '../assets/styles/mixins/_theme';

const useTheme = () => {
    	
	if (typeof localStorage === `undefined`)  {
		return 
	} 
	const stored = localStorage.getItem("darkmode");
        const [mode, setmode] = useState(stored === "true" ? true : false);
	const theme = mode ? DarkTheme : LightTheme;
	const toggleMode = () => {
		setmode(!mode)
		localStorage.setItem("darkmode", !mode);
	};

	return {
		theme,
		mode,
		toggleMode
	};

	
};

export default useTheme;
