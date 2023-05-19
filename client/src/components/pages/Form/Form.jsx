import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../../redux/actions'
import axios from 'axios';
import validation from './validations'

const Form = () => {

    const newActivity = async (data) => {

        try {
            
            const response = await axios.post('/activities', data);
            console.log(response.data);
            if (response.data.created === true) {
                setActivityData({
                    name: '',
                    difficulty: '',
                    duration: '',
                    season: '',
                    countries: []
                });

                setActivityCreated('created');
            } else {setActivityCreated('no created')}

        } catch (error) {
            console.log(error);
        }

    };

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);

    const [activityData, setActivityData] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    });

    const [errors, setErrors] = useState({});
    const [activityCreated, setActivityCreated] = useState('');

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        const parsedValue = name === 'duration' ? parseFloat(value) : value;
        setActivityData({
            ...activityData,
            [name]: parsedValue
        });

        setErrors(validation({
            ...activityData,
            [name]: parsedValue
        }));
    };

    const handleDifficultyChange = (event) => {
        const { value } = event.target;
        setActivityData((prevData) => ({
          ...prevData,
          difficulty: parseInt(value),
        }));
      };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setActivityData((prevData) => {
          if (checked) {
            return {
              ...prevData,
              countries: [...prevData.countries, value],
            };
          } else {
            return {
              ...prevData,
              countries: prevData.countries.filter((id) => id !== value),
            };
          }
        });
    };

    const isDisabled =
    activityData.name.trim() === '' ||
    activityData.difficulty === '' ||
    activityData.season === '' ||
    activityData.countries.length === 0;

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validation(activityData);
        if (Object.keys(errors).length === 0) {
          const data = {
            name: activityData.name,
            difficulty: parseInt(activityData.difficulty),
            duration: parseInt(activityData.duration),
            season: activityData.season,
            countriesID: activityData.countries,
          };
          newActivity(data);
        } else {
          console.log(errors);
        }
      };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>{'(*) Campos obligatorios'}</p>
                <label htmlFor="name">*Nombre:</label>
                <input name="name" type="text" onChange={handleInputChange} value={activityData.name}/>
                {errors.name && <p>{errors.name}</p>}
                <br/>
                <label htmlFor="difficulty">*Dificultad:</label>
                {[1, 2, 3, 4, 5].map((value) => (
                    <label key={value} htmlFor={value}>
                    {value}
                    <input
                        type="radio"
                        name="difficulty"
                        value={value}
                        checked={activityData.difficulty === value}
                        onChange={handleDifficultyChange}
                    />
                    </label>
                ))}
                <br/>
                <label htmlFor="duration">{'Duración (en horas):'}</label>
                <input name="duration" type="number" value={activityData.duration} onChange={handleInputChange}/>
                {errors.duration && <p>{errors.duration}</p>}
                <br/>
                <label htmlFor="season">*Temporada:</label>
                <select name="season" value={activityData.season} onChange={handleInputChange}>
                    <option value="">Seleccionar</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                </select>
                <br/>
                <label htmlFor="countries">*Países donde se practica:</label>
                {allCountries.map((country) => (
                    <label key={country.id} htmlFor={country.name}>
                        {country.name}
                        <input
                        type="checkbox"
                        name="countries"
                        value={country.id}
                        id={country.name}
                        checked={activityData.countries.includes(country.id)}
                        onChange={handleCheckboxChange}
                        />
                    </label>
                 ))}
                <br/>
                <button type="submit" disabled={isDisabled}>Enviar</button>
                {activityCreated === 'created' && <p>La actividad ha sido creada.</p>}
                {activityCreated === 'no created' && <p>{`Ya existe una actividad con el nombre "${activityData.name}"`}</p>}
            </form>
        </div>
    )
}

export default Form;