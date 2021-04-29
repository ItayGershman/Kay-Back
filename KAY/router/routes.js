const express = require('express');
var router = express.Router();
const { userController } = require('../controller/userController')
const { locationController } = require('../controller/locationController')
const { scenarioController } = require('../controller/scenarioController')
const { intentController } = require('../controller/intentController')
const { scenarioConfigController } = require('../controller/scenarioConfigController')
const { conversationController } = require('../controller/conversationController')

//User routes
router.post('/signin', async (req, res) => {
    userController.signIn(req, res);
});

router.post('/user', (req, res) => {
    userController.createUser(req, res);
});

router.get('/user/:userEmail', (req, res) => {
    userController.getUser(req, res);
});

router.put('/user/:userEmail', (req, res) => {
    userController.setUser(req, res);
});

router.delete('/user/:userEmail', (req, res) => {
    userController.deleteUser(req, res);
});

//Location routes
router.post('/location', (req, res) => {
    locationController.createLocation(req, res);
});

router.get('/location/:locationName', (req, res) => {
    locationController.getLocation(req, res);
});

router.put('/location/:locationName', (req, res) => {
    locationController.setLocation(req, res);
});

router.delete('/location/:locationName', (req, res) => {
    locationController.deleteLocation(req, res);
});

//Scenario Configuration routes
router.post('/scenario_config', (req, res) => {
    scenarioConfigController.createScenarioConfig(req, res);
});

router.get('/scenario_config/:scenarioConfigName', (req, res) => {
    scenarioConfigController.getScenarioConfig(req, res);
});

router.put('/scenario_config/:scenarioConfigName', (req, res) => {
    scenarioConfigController.setScenarioConfig(req, res);
});

router.delete('/scenario_config/:scenarioConfigName', (req, res) => {
    scenarioConfigController.deleteScenarioConfig(req, res);
});

//Scenario routes
router.post('/scenario', (req, res) => {
    scenarioController.createScenario(req, res);
});

router.get('/scenario/:scenarioName', (req, res) => {
    scenarioController.getScenario(req, res);
});
router.get('/scenario', (req, res) => {
    scenarioController.getAllScenarios(req, res);
});
router.put('/scenario/:scenarioName', (req, res) => {
    scenarioController.setScenario(req, res);
});

router.delete('/scenario/:scenarioName', (req, res) => {
    scenarioController.deleteScenario(req, res);
});

//Intent routes
router.post('/intent', (req, res) => {
    intentController.createIntent(req, res);
});

router.get('/intent/:scenarioConnection/:intentName', (req, res) => {
    intentController.getIntent(req, res);
});

router.get('/intent', (req, res) => {
    intentController.getAllIntents(req, res);
});

router.get('/intent/:scenarioConnection', (req, res) => {
    intentController.getIntentsByScenraio(req, res);
});

router.put('/intent/:scenarioConnection/:intentName', (req, res) => {
    intentController.setIntent(req, res);
});

router.delete('/intent/:scenarioConnection/:intentName', (req, res) => {
    intentController.deleteIntent(req, res);
});

//Conversation routes
router.post('/conversation', (req, res) => {
    conversationController.createConversation(req, res);
});

router.get('/conversation/:date/:title', (req, res) => {
    conversationController.getConversation(req, res);
});

router.get('/conversation', (req, res) => {
    conversationController.getAllConversations(req, res);
});

router.delete('/conversation/:date/:title', (req, res) => {
    conversationController.deleteConversation(req, res);
});

module.exports = router
