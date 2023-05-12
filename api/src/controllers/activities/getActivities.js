const { Activity } = require('../../db');

const getActivities = async (req, res) => {

    try {
        const allActivities = await Activity.findAll();

        if(!allActivities.length) throw new Error('No hay actividades en la base de datos');

        return res.status(200).json(allActivities);
    
    } catch (error) {
        
        return res.status(500).send(error.message);
    }
}

module.exports = getActivities;