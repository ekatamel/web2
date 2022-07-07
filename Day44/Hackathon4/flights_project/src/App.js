import SearchFlights from './SearchFlights';
import PopularFlights from './PopularFlights';
import SearchBarLocation from './SearchBarLocation';
import SearchResultsLocation from './SearchResultsLocation';
import LocationDetail from './LocationDetail';
import FlightDetail from './FlightDetail';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/' className='nav__link'>
          Home
        </Link>
        <Link to='/search-main' className='nav__link'>
          Search locations
        </Link>
        <Link to='/search-flights' className='nav__link'>
          Search flights
        </Link>
      </nav>
      {/* home page Route */}
      <Routes>
        <Route path='/' element={<PopularFlights />} />
        <Route path='/search-flights' element={<SearchFlights />} />
      </Routes>

      {/* search from Prague to any destination Route */}
      <Routes>
        <Route path='/search-main' element={<SearchBarLocation />} />

        <Route path='/search-main/:from' element={<SearchResultsLocation />} />

        {/* search results from Prague to any destination Route */}
        <Route path='/search-main/:from' element={<SearchResultsLocation />} />

        <Route path='/flight/:from/:to' element={<FlightDetail />} />

        <Route path='/locations/:code' element={<LocationDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
