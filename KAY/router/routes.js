const express = require('express');
var router = express.Router();
const { userController } = require('../controller/userController')

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

module.exports = router
