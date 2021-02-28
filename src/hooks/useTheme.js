/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";
import { LightTheme, DarkTheme } from '../assets/styles/mixins/_theme';

const useTheme = () => {
    	const stored = false;
	if (typeof localStorage !== `undefined`)  {
		const stored = localStorage.getItem("darkmode");
	}
	const [mode, setmode] = useState(stored === "true" ? true : false);
	useEffect(() => {
	    if (stored) {
	      setmode(stored);
	    }
	  }, []);
	
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
