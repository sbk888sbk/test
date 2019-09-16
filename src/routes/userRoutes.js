const express = require("express");

const router = express.Router();


const userController = require('../controllers/userController');


router.post('/login',    userController.validateUser);



module.exports = router;

