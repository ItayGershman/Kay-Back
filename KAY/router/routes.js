const express = require('express');
var router = express.Router();
const { userController} = require('../controller/userController')

router.post('/createUser', (req,res)=>{
    userController.createUser(req,res);
})

module.exports = router
