import React, { useEffect, useState } from 'react';

function StatusFilter({selected_status, setSelectedStatus}) {

    const [statuses, setStatuses] = useState("")
    const [classname, setClassname] = useState("button")

    const loadStatuses = async () => {
        const response = await fetch("/api/statuses")
        const responseData = await response.json()
        setStatuses(responseData)
    }

    useEffect(() => {
        loadStatuses()
    }, [])
    

    return (
        <div className='status-filter'>
            {
                statuses && statuses.map((status, i) => {
                    return <button className={classname} onClick={(e) => {
                        if (selected_status === "") {
                            setSelectedStatus(status.id)
                            const array = Array.from(e.target.parentElement.children)
                            array.forEach((el) => {
                             el.classList.remove("selected")
                            })
                            e.target.classList.add("selected")
                        } else {
                            setSelectedStatus("")
                            const array = Array.from(e.target.parentElement.children)
                            array.forEach((el) => {
                             el.classList.remove("selected")
                            })
                        }
                       


                    }}>{status.name}</button>
                })
            }
        </div>
    )
}

export default StatusFilter;