import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER_ALPHABETICAL, ORDER_POPULATION } from './action-types';

const initialState = {
  allCountries: [],
  allCountriesCopy: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        allCountriesCopy: payload
      };

    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        allCountries: payload,
        allCountriesCopy: payload
      };

    case FILTER_BY_CONTINENT:
      const countriesByContinent = state.allCountriesCopy.filter(
        country => country.continent === payload
      );
      return {
        ...state,
        allCountries: payload === 'allCountries' ? [...state.allCountriesCopy] : countriesByContinent
      };

    case FILTER_BY_ACTIVITY:
      const countriesByActivity = state.allCountriesCopy.filter(country => {
        if (country.activities && country.activities.length > 0) {
          return country.activities.some(activity => activity.name === payload);
        }
        return false;
      });
      return {
        ...state,
        allCountries: payload === 'allCountries' ? [...state.allCountriesCopy] : countriesByActivity
      };

    case ORDER_ALPHABETICAL:
      const countriesOrderAlphabetical = [...state.allCountries];
      countriesOrderAlphabetical.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      return {
        ...state,
        allCountries: payload === 'A' ? countriesOrderAlphabetical : countriesOrderAlphabetical.reverse()
      };

    case ORDER_POPULATION:
      const countriesOrderPopulation = [...state.allCountries];
      countriesOrderPopulation.sort((a, b) => {
        return a.population - b.population;
      });
      return {
        ...state,
        allCountries: payload === 'A' ? countriesOrderPopulation : countriesOrderPopulation.reverse()
      };

    default:
      return state;
  }
};

export default reducer;
