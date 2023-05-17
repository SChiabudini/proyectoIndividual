import { GET_ALL_COUNTRIES } from './action-types';

const initialState = {
  allCountries: [],
  loading: false,
  error: ''
};

const reducer = (state = initialState, { type, payload }) => {
  switch ( type ) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        loading: false,
        error: ''
      };
      
    default:
      return state;
  }
};

export default reducer;