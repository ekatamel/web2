function PeopleList(props) {

    

    console.log(props.data)

    let selectedPeople = props.data

    if (props.selected_status) {
        selectedPeople = props.data.filter((person) => {
            return person.status.id === props.selected_status
        })
    } 


    console.log(selectedPeople)

    return (
        <ul>
            {
                selectedPeople.map((person, i) => {
                    return <li key={i}>{person.name} : {person.status.name}</li>
                })
            }
        </ul>
    )
}

export default PeopleList