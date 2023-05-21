import styles from './Cards.module.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { getAllCountries } from '../../../../redux/actions'

const mapStateToProps = (state) => {
    
    return {
      countries: state.allCountries
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getAllCountries: () => dispatch(getAllCountries())
    };
  };
  

const Cards = ({ countries, loading, error, getAllCountries }) => {

    
  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  return (
    <div className={styles.container}>
      {countries.map(({ id, name, continent, flag }) => {
        return (
          <div key={id} className={styles.cardBox}>
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