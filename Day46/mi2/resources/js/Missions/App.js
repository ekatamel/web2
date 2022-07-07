import MissionEditForm from "./MissionEditForm"
import MissionList from "./MissionList"
import Register from "./Register"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <h1>Missions App</h1>
            <p>This is the Missions react app</p>

            <nav>
                <Link to="/missions">List of missions</Link>
                <Link to="/missions/create">Edit a mission</Link>
            </nav>

            <Routes>
                <Route exact path="/missions" element= {<MissionList/>}/>
                <Route exact path="/missions/create" element= {<MissionEditForm/>}/>
                <Route exact path="/missions/register" element= {<Register/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default App