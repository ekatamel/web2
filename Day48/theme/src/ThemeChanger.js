import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
 
const ThemeChanger = () => {
 
    const { theme, setTheme } = useContext(ThemeContext);
 
    const showContext = () => theme === 'light' ? 'light' : 'dark';
 
    const toggleContext = () => theme === 'light' ? setTheme('dark') : setTheme('light')
 
    return (
        <label className="toggle-theme">
 
            <span onClick={toggleContext}>Theme {showContext()}</span>
 
        </label>
    );
}
 
export default ThemeChanger;