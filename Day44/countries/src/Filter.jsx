function Filter({setQuery, loadData}) {
    return(
        <select className="input__search" name="regions" id="" onChange={
            (e) => {
                setQuery(`region/${e.target.value}`)
                // console.log("New query")
                // loadData()
            }
        }>
            <option value="">Filter by region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="ocenia">Ocenia</option>
        </select>
    )
}

export default Filter