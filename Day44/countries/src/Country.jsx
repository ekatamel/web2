

function Country(props) {

    const { name, population, region, flags} = props.info

    return(
        <>



        <a className="country__link" href={`/${name.common}`} >
                    <div className="country">
            <img className="country__image" src={flags.png} alt="" />
            <div className="country__info">
                <h3 className="country__title">{name.common}</h3>
                <p className="country__population">Population: {population}</p>
                <p className="country__region">Region: {region}</p>
            </div>

        </div>

        </a>

        </>
    )

}

export default Country