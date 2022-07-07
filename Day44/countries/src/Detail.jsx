import {useParams, Link} from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";


function Detail() {

    const params = useParams()

    const [data, setData] = useState(null)

    const loadData = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${params.name}`)
        const responseData = await response.json()
        setData(responseData[0])
      }
    
      useEffect(() => {
        loadData()
      }, [])

      console.log(data)


    return (
        <div className="details">
            <Link className="input__search" to="/">Back</Link>
            {
                data && (
                    <div className="details__container">
                
                
                <img src={data.flags.png} alt="" />
                
                <div className="details__info">
                §<h2>{data.name.common}</h2>
                    <p className="details__name">Native name:</p>
                    <ul>
                    {
                        Object.keys(data.name.nativeName).map((element, i) => {
                            return <li key={i}>{data.name.nativeName[element].official}</li>
                        })
                    }
                    </ul>
                    <p className="details__population">Population: {data.population}</p>
                    <p className="details__region">Region: {data.region}</p>
                    <p className="details__subregion">Subregion: {data.subregion}</p>
                    <p className="details__subregion">Capital: {data.capital.join(", ")}</p>
                    <p className="details__doamin">Top level domain: {data.tld.join(", ")}</p>
                    <p className="details__currencies">Currencies:</p>
                    <ul>
                        {
                            Object.keys(data.currencies).map((e, i) => {
                                return  <li>{data.currencies[e].name}</li>
                            })
                        }
                    </ul>
                    <p className="details__languages">Languages: </p>
                    <ul>
                        {
                            Object.values(data.languages).map((e, i) => {
                                return  <li>{e}</li>
                            })
                        }
                    </ul>
                    

                </div>
                </div>
                )
            }
            

        </div>
    )
}


export default Detail