import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country"
import Search from "./Search";
import Filter from "./Filter"

function CountryList() {
    const [data, setData] = useState(null)

    const [query, setQuery] = useState("all")
  
    const loadData = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/${query}`)
      const responseData = await response.json()
      setData(responseData)
      console.log("Loading data")
    }
  
    useEffect(() => {
      loadData()
    }, [query])

    return (

        <div className="countries__container">
            <div className="search">

            <Search setQuery={setQuery} loadData={loadData}/>
      <Filter setQuery={setQuery} loadData={loadData}/>
            </div>

        <div className="countries">
        {
          data && (
            data.map((country, i) => {
              return <Country key={i} info={country}/>
            })
          )
        }
      </div></div>
        
    )
}

export default CountryList