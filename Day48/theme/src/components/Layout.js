import { useContext } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import ThemeContext from "../context/ThemeContext";
 
const Layout = () => {
 
  const { theme } = useContext(ThemeContext)
 
  return (
    <div className="layout" style={ theme === 'light' ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' } }>
 
        <Header />
 
        <MainContent />
 
    </div>
  );
}
 
export default Layout;