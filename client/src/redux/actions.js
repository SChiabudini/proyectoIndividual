import { GET_ALL_COUNTRIES } from './action-types';
import axios from 'axios';

export const getAllCountries = () => {
    const endpoint = 'http://localhost:3001/countries';

    return async (dispatch) => {

        try {
            const { data } = await axios.get(endpoint)
            
            if(!data.length) throw new Error('No countries');

            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}