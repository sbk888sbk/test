const express = require("express");

const router = express.Router();



const appController = require('../controllers/appController');

router.post('/addApp', appController.addAppDetails);

// router.post('/uploadApp/upload', appController.uploadFile);

// router.get('/uploadApp/upload', (req, res, next) => {
//     res.send('<form method="post" enctype="multipart/form-data" action="/appdetails/uploadApp/upload">    <input type="file" name="file">    <input type="submit" value="Submit"></form>');
// });




router.get('/:appName', appController.retrieveApp);

router.get('/display/all', appController.retrieveAllApps);

router.get('/display/history/:appName', appController.retrieveAppHistory);





router.get('/', (req, res, next) => {
    res.redirect('/admin');
})



module.exports = router;

