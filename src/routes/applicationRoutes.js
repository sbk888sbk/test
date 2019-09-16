const express = require("express");

const router = express.Router();



const appController = require('../controllers/appController');


router.get('/all', appController.retrieveAllApps);

router.get('/:appName', appController.retrieveApp);


module.exports = router;

