import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCountries, getCountriesByName } from '../../../../redux/actions';

const SearchBar = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSearch = async () => {
        try {
            await dispatch(getCountriesByName(name));
            setError('');
            setName('');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleBack = () => {
        dispatch(getAllCountries());
        setError('');
    };

   return (
      <div>
        <label htmlFor="search">Buscar por nombre</label>
        <input type='search' name="search" onChange={handleChange} value={name}></input>
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleBack}>Volver</button>
        {error && <div>{error}</div>}
      </div>
   );
}

export default SearchBar;