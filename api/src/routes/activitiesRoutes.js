const activitiesRoutes = require('express').Router();
const postActivity = require('../controllers/activities/postActivity');
const getActivities = require('../controllers/activities/getActivities');

activitiesRoutes.post('/', (req, res) => {
    postActivity(req, res);
});

activitiesRoutes.get('/', (req, res) => {
    getActivities(req, res);
});

module.exports = activitiesRoutes;