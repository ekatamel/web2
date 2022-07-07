import Layout from "./Layout"
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";
import themes from "./util/themes"


import "./App.css"

function App() {


  const [theme, setTheme] = useState(themes.light)

  return (
    <ThemeContext.Provider value={{ theme, setTheme}}>
          <Layout />
    </ThemeContext.Provider>

  )
}

export default App;
