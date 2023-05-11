const { Country } = require('../../db');
const { Op } = require('sequelize');

const getCountriesByName = async (req, res) => {

    const { name } = req.query;

    if (!name) {
        return res.redirect('/countries'); // Redirige a la ruta que devuelve todos los países
    }

    try {
        const countries = await Country.findAll({

            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });

        if(!countries.length) throw new Error('No countries found with that name');

        return res.status(200).json(countries);

    } catch (error) {
        if(error.message.includes('No countries found')) return res.status(400).send(error.message);

        return res.status(500).send(error.message);
    }
}

module.exports = getCountriesByName;