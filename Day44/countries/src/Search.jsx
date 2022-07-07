import { useState } from "react";

function Search({setQuery, loadData}) {

    const [value, setValue] = useState("")


    return (


        <input placeholder="Search for a country..." type="search" className="input__search wide" onChange={
            (e) => {
                setValue(e.target.value)
            }
        } 




        
        onKeyDown={
            (e) => {
                e.key === "Enter" && setQuery(`name/${value}`)

            }
            
        } 
        
        />


    )
}

export default Search
