/* eslint-disable import/no-anonymous-default-export */
import { useState, useEffect } from "react";
import { LightTheme, DarkTheme } from '../assets/styles/mixins/_theme';

const useTheme = () => {
    let stored = false;

	if(typeof localStorage !== `undefined`)  {
		stored = localStorage.getItem("mode");
	} 
	
    const [mode, setmode] = useState(stored === "true" ? true : false);
	
	const theme = mode ? DarkTheme : LightTheme;
	
	useEffect(() => {
		if(typeof localStorage !== `undefined`)  {
			let stored = localStorage.getItem("mode");

			if (stored) {
				setmode(!mode);
		  	}
		} 
		
	},[]);

	useEffect(() => {
		if(typeof localStorage !== `undefined`)  {
	    	localStorage.setItem("mode", !mode);
		}
	 }, [stored]);

	const toggleMode = () => {
		setmode(!mode)
		localStorage.setItem("mode", !mode);
	};

	return {
		theme,
		mode,
		toggleMode
	};
};

export default useTheme;
