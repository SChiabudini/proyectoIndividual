import styles from './Cards.module.css';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
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

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(8);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
    
  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  return (
    <div className={styles.container}>
      <Pagination
        currentPage={currentPage}
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        pagination={pagination}
      />
      {currentCountries.map(({ id, name, continent, flag }) => {
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