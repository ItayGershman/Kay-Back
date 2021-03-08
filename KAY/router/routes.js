const express = require('express');
var router = express.Router();
const { userController } = require('../controller/userController')
const { locationController } = require('../controller/locationController')
const { scenarioController } = require('../controller/scenarioController')

//User routes
router.post('/user', (req, res) => {
    userController.createUser(req, res);
});

router.get('/user', (req, res) => {
    userController.getUser(req, res);
});

router.put('/user', (req, res) => {
    userController.setUser(req, res);
});

router.delete('/user', (req, res) => {
    userController.deleteUser(req, res);
});

//Location routes
router.post('/location', (req, res) => {
    locationController.createLocation(req, res);
});

router.get('/location', (req, res) => {
    locationController.getLocation(req, res);
});

router.put('/location', (req, res) => {
    locationController.setLocation(req, res);
});

router.delete('/location', (req, res) => {
    locationController.deleteLocation(req, res);
});

//Scenario routes --> need to recode this
router.post('/createScenario', (req, res) => {
    scenarioController.createScenario(req, res);
});

router.get('/getScenario', (req, res) => {
    scenarioController.getScenario(req, res);
});

router.post('/setScenario', (req, res) => {
    scenarioController.setScenario(req, res);
});

router.delete('/deleteScenario', (req, res) => {
    scenarioController.deleteScenario(req, res);
});

module.exports = router
