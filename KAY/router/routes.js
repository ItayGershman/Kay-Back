const express = require('express');
var router = express.Router();
const { userController } = require('../controller/userController')
const { locationController } = require('../controller/locationController')

//User routes
router.post('/createUser', (req, res) => {
    userController.createUser(req, res);
});

router.get('/getUser', (req, res) => {
    userController.getUser(req, res);
});

router.post('/setUser', (req, res) => {
    userController.setUser(req, res);
});

router.delete('/deleteUser', (req, res) => {
    userController.deleteUser(req, res);
});

//Location routes
router.post('/createLocation', (req, res) => {
    locationController.createLocation(req, res);
});

router.get('/getLocation', (req, res) => {
    locationController.getLocation(req, res);
});

router.post('/setLocation', (req, res) => {
    locationController.setLocation(req, res);
});

router.delete('/deleteLocation', (req, res) => {
    locationController.deleteLocation(req, res);
});
module.exports = router
