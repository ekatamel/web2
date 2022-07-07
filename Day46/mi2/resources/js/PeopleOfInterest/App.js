import React, { useEffect, useState } from 'react';
import PeopleList from "./PeopleList"
import StatusFilter from './StatusFilter';
import MissionEditForm from './MissionEditForm';
 
export default function App() {

    const [people, setPeople] = useState([])
    const [results, setResults] = useState([])
    const [selected_status, setSelectedStatus] = useState("")
    // const [value, setValue] = useState(null)

    const handleChange = (e) => {
        loadResults(e.target.value)
    }

    const loadResults = async (searchString) => {
        const response = await fetch(`/api/search/${searchString}`)
        const responseData = await response.json()
        // console.log(responseData)
        setResults(responseData)
        }


    // const loadPeople = async () => {
    //     const response = await fetch("/api/people-of-interest")
    //     const responseData = await response.json()
    //     setPeople(responseData)

    // }

    // useEffect(() => {
    //     loadPeople()
    // }, [])


    return (
        <>
        <StatusFilter selected_status={selected_status} setSelectedStatus={setSelectedStatus} /><br/>
        Search for name : <input type="search" onChange={handleChange}/>

        <PeopleList data={results} selected_status={selected_status}/>

        <h2>Create a new mission</h2>
        <MissionEditForm />

        {/* people && <div>{
            people.map((person) => {
                return <li>{person.name} : {
                    person.aliases.map((name) => {
                        return <span>{name.alias}, 
                        </span>
                    })
                }</li>
            })
            }</div> */}
    </>
    )
}

