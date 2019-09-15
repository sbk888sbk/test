const express = require("express");

const router = express.Router();

const path = require('path');

const userController = require('../controllers/userController');

//router.post('/login',userController.validateUser);
router.post('/login',    userController.validateUser);

router.post('/register', userController.registerUser);

router.post('/delete',userController.deleteUser);


module.exports = router;

