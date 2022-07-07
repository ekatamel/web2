import Header from "./Header";
import MainContent from "./MainContent";
import ThemeChanger from "./ThemeChanger";
import themes from "./util/themes";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function Layout() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={theme === themes.light ? { ...theme } : { ...themes.dark }}>
      <Header />
      <MainContent />
      <ThemeChanger />
    </div>
  );
}

export default Layout;
