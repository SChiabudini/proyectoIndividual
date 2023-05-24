import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css';

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
        <div className={style.container}>
            <img src={country?.flag} alt={country?.name}/>
            <div className={style.content}>
                <h2>{country?.name}</h2>
                <p>Código de identificación: {id}</p>
                <p>Continente: {country?.continent}</p>
                <p>Capital: {country?.capital}</p>
                {country?.subregion && <p>Subregión: {country.subregion}</p>}
                {country?.area && <p>Área: {country.area}</p>}
                <p>Población: {country.population}</p>
            </div>
        </div>
    )
}

export default Detail;