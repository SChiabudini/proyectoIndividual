import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {

    const { id } = useParams();
    let [ country, setCountry ] = useState({});

    useEffect(() => {
        const getData = async () => {

            try {
                
                const { data } = await axios.get(`/countries/${id}`);
                
                console.log(data);

                if(data.name){
                    setCountry(data);
                } else {
                    window.alert('No existe este país');
                }
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [id]);

    return(
        <div>
            <h1>{country?.name}</h1>
            <p>Código de identificación: {id}</p>
            <img src={country?.flag} alt={country?.name}/>
            <p>Continente: {country?.continent}</p>
            <p>Capital: {country?.capital}</p>
            {country?.subregion && <p>Subregión: {country.subregion}</p>}
            {country?.area && <p>Área: {country.area}</p>}
            <p>Población: {country.population}</p>
            
        </div>
    )
}

export default Detail;