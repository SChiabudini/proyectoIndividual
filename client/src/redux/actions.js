import { GET_ALL_COUNTRIES } from './action-types';
import axios from 'axios';

const countries = '/countries';

export const getAllCountries = () => {
    

    return async (dispatch) => {

        try {
            const { data } = await axios.get(countries)
            
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