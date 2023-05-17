import { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { getAllCountries } from '../../../../redux/actions'

const mapStateToProps = (state) => {
    
    return {
      countries: state.allCountries,
      loading: state.loading,
      error: state.error
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getAllCountries: () => dispatch(getAllCountries())
    };
  };
  

const Cards = ({ countries, loading, error, getAllCountries }) => {

    console.log(countries);
    
  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {countries.map(({ id, name, continent, flag }) => {
        return (
          <div key={id}>
            <Card
              id={id}
              name={name}
              continent={continent}
              flag={flag}
            />
          </div>
        );
      })}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);