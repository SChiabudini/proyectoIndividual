const activitiesRoutes = require('express').Router();
const postActivity = require('../controllers/activities/postActivity');

activitiesRoutes.post('/', (req, res) => {
    postActivity(req, res);
});

module.exports = activitiesRoutes;