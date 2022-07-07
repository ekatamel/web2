import React, { useState, useContext } from "react"
import ThemeContext from "./context/ThemeContext";
import Layout from "./components/Layout"


function App() {

  const [ theme, setTheme ] = useState(null)




  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      
     <Layout />
    </ThemeContext.Provider>
  );
}

export default App;
