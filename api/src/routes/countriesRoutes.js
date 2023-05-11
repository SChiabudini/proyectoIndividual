const countriesRoutes = require('express').Router();
const getCountries = require('../controllers/countries/getCountries');
const getCountriesByName = require('../controllers/countries/getCountriesByName');


countriesRoutes.get('/', (req, res) => {
    getCountriesByName(req, res);
});

countriesRoutes.get('/', (req, res) => {
    getCountries(req, res);
});


module.exports = countriesRoutes;