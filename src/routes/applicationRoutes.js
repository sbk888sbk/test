const express = require("express");

const router = express.Router();



const appController = require('../controllers/appController');


router.get('/showall', appController.retrieveAllApps);

router.get('/:appName', appController.retrieveApp);
router.post('/addApp', appController.addAppDetails);

router.get('/', (req, res, next) => {
    res.redirect('/admin');
})



module.exports = router;

