/* eslint-disable import/no-anonymous-default-export */
import { useState, useEffect } from "react";
import { LightTheme, DarkTheme } from '../assets/styles/mixins/_theme';

const useTheme = () => {
    	const stored = false;
	if(typeof localStorage !== `undefined`)  {
		stored = localStorage.getItem("darkmode");
		console.log(stored)
	} 
	console.log(stored)
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
