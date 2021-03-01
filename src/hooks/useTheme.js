import { useState, useEffect } from "react";
import { LightTheme, DarkTheme } from '../assets/styles/mixins/_theme';

const useTheme = () => {
    let stored = false;

	if(typeof localStorage !== `undefined`)  {
		stored = localStorage.getItem("mode") === "true" ? true : false;
	} 
	
    const [mode, setmode] = useState(stored === "true" ? true : false);
	
	const theme = mode ? DarkTheme : LightTheme;
	
	useEffect(() => {
		let stored = localStorage.getItem("mode") === "true" ? true : false;

		if (stored) {
			setmode(stored);
		}
	},[]);

	useEffect(() => {
		localStorage.setItem("mode", stored);
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
