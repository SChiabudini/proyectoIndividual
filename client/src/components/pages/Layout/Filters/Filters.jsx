import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterByContinent, filterByActivity, orderAlphabetical, orderPopulation } from '../../../../redux/actions';

const Filters = () => {

    const dispatch = useDispatch();

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const getActivities = async () => {
          try {
            const response = await axios.get('/activities');
            setActivities(response.data);
          } catch (error) {
            console.log(error);
          }
        };
    
        getActivities();
    }, []);

    const handleFilterContinent = (event) => {
        dispatch(filterByContinent(event.target.value));
    }

    const handleFilterActivity = (event) => {
        dispatch(filterByActivity(event.target.value));
    }

    const handleOrderAlphabetical = (event) => {
        dispatch(orderAlphabetical(event.target.value));
    }

    const handleOrderPopulation = (event) => {
        dispatch(orderPopulation(event.target.value));
    }

    return(
        <div>
            <select onChange={handleFilterContinent}>
                <option value="allCountries">Filtrar por continente</option>
                <option value="Europe">Europa</option>
                <option value="Africa">África</option>
                <option value="Asia">Asia</option>
                <option value="Antarctica">Antártida</option>
                <option value="North America">América del Norte</option>
                <option value="South America">América del Sur</option>
                <option value="Oceania">Oceanía</option>
                <option value="allCountries">Todos los continentes</option>
            </select>
            <select onChange={handleFilterActivity}>
                <option value="allCountries">Filtrar por actividad</option>
                {activities.map((activity) => (
                    <option value={activity.name} key={activity.name}>
                        {activity.name}
                    </option>
                ))}
                <option value="allCountries">Todos los países</option>
            </select>
            <select onChange={handleOrderAlphabetical}>
                <option value="">Ordenar alfabéticamente</option>
                <option value="A">Ascendente</option>
                <option value="B">Descendente</option>
            </select>
            <select onChange={handleOrderPopulation}>
                <option value="">Ordenar por población</option>
                <option value="A">Ascendente</option>
                <option value="B">Descendente</option>
            </select>
        </div>
    )
}

export default Filters;