import { useContext } from "react"
import ThemeContext from "./context/ThemeContext"
import themes  from "./util/themes"

function ThemeChanger() {

    const {theme, setTheme} = useContext(ThemeContext)

    const handleClick = () => {
        theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
        console.log(theme)
    }


    return (
        <button onClick={handleClick}>
            Change theme
        </button>
    )
}

export default ThemeChanger
