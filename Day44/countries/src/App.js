
import CountryList from "./CountryList"

import Detail from "./Detail"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"


function App() {




  return (
    <>
    <BrowserRouter>
    <nav>
      <Link className="nav__link" to="/">Where in the world?</Link>
    </nav>
    
    
    


    <Routes>
      <Route exact path="/" element={<CountryList />}/>
      <Route path="/:name" element={<Detail />} />
    </Routes>

    </BrowserRouter>


    
    
   

    
    </>
  );
}

export default App;
