/* eslint-disable import/no-anonymous-default-export */
import { useState, useEffect } from "react";
import { LightTheme, DarkTheme } from '../assets/styles/mixins/_theme';

const useTheme = () => {
    	const stored;
	if (typeof localStorage !== `undefined`)  {
		const stored = localStorage.getItem("darkmode");
	}
	const [mode, setmode] = useState(stored === "true" ? true : false);
	console.log(stored, mode)
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
