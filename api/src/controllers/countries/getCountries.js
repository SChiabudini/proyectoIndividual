const { Country } = require('../../db');

const getCountries = async (req, res) => {

    try {
        const allCountries = await Country.findAll();

        if(!allCountries.length) throw new Error('No hay países en la base de datos');

        return res.status(200).json(allCountries);
    
    } catch (error) {
        
        return res.status(500).send(error.message);
    }
}

module.exports = getCountries;