import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER_ALPHABETICAL, ORDER_POPULATION } from './action-types';
import axios from 'axios';

const countries = '/countries';

export const getAllCountries = () => {
    
    return async (dispatch) => {

        try {
            const { data } = await axios.get(countries)
            
            if(!data.length) throw new Error('No hay países');

            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getCountriesByName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${countries}?name=${name}`);
            const { data } = response;

            if (!data.length) {
                throw new Error('No hay países con ese nombre');
            }

            return dispatch({
                type: GET_COUNTRIES_BY_NAME,
                payload: data,
            });
        } catch (error) {
            throw new Error('No hay países con ese nombre');
        }
    };
};

export const filterByContinent = (continent) => {
    return { type: FILTER_BY_CONTINENT, payload: continent }
};

export const filterByActivity = (activity) => {
    return { type: FILTER_BY_ACTIVITY, payload: activity }
};

export const orderAlphabetical = (order) => {
    return { type: ORDER_ALPHABETICAL, payload: order }
};

export const orderPopulation = (order) => {
    return { type: ORDER_POPULATION, payload: order }
};