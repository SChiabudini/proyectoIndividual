import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../../redux/actions'
import axios from 'axios';
import style from './Form.module.css'
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
                    countries: [],
                    image: ''
                });

                setActivityCreated('created');
            } else {setActivityCreated('no created')}

        } catch (error) {
            console.log(error);
        }

    };

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);
    const sortedCountries = allCountries.slice().sort((a, b) => a.name.localeCompare(b.name));

    const [activityData, setActivityData] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
        image: ''
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

    const handleImageChange = (event) => {
      const { value } = event.target;
      setActivityData((prevData) => ({
        ...prevData,
        image: value,
      }));
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
            image: activityData.image
          };
          newActivity(data);
        } else {
          console.log(errors);
        }
      };

    return(
      <div className={style.container}>
        <h3>Agregá una actividad</h3>
        <p>{'(*) Campos obligatorios'}</p>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="name">Nombre: *</label>
            <input name="name" type="text" onChange={handleInputChange} value={activityData.name}/>
            {errors.name && <div className={style.errores}>{errors.name}</div>}
          </p>
          <p>
            <label htmlFor="difficulty">Dificultad: *</label>
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
          </p>
          <p>
            <label htmlFor="duration">{'Duración (en horas):'}</label>
            <input name="duration" type="number" value={activityData.duration} onChange={handleInputChange} className={style.duration}/>
            {errors.duration && <div className={style.errores}>{errors.duration}</div>}
          </p>
          <p>
            <label htmlFor="season">Temporada: *</label>
            <select name="season" value={activityData.season} onChange={handleInputChange}>
                <option value="">Seleccionar</option>
                <option value="Verano">Verano</option>
                <option value="Otoño">Otoño</option>
                <option value="Invierno">Invierno</option>
                <option value="Primavera">Primavera</option>
            </select>
          </p>
          <p>
            <label htmlFor="image">Imagen:</label>
            <input name="image" placeholder="URL" type="text" onChange={handleImageChange} value={activityData.image}/>
          </p>
          <p>
            <label htmlFor="countries">*Países donde se practica:</label>
            <br/>
              <div className={style.paises}>
              {sortedCountries.map((country) => (
                <label key={country.id} htmlFor={country.name} className={style.countryLabel}>
                  <input
                    type="checkbox"
                    name="countries"
                    value={country.id}
                    id={country.name}
                    checked={activityData.countries.includes(country.id)}
                    onChange={handleCheckboxChange}
                  />
                  {country.name}
                </label>
              ))}
              </div>
          </p>
          <button type="submit" disabled={isDisabled}>Enviar</button>
          {activityCreated === 'created' && <p className={style.creada}>La actividad ha sido creada.</p>}
          {activityCreated === 'no created' && <p className={style.creada}>{`Ya existe una actividad con el nombre "${activityData.name}"`}</p>}
        </form>
      </div>
    )
}

export default Form;