const retrieveAppData = require('../models/retrieveAppData');

exports.retrieveAllApps = (req, res, next) => {
    
    retrieve();
    async function retrieve () {
        let appsData        =     await retrieveAppData.retrieveAllApps();
        console.log(appsData)
        res.send(appsData);
        
    }
}

exports.retrieveApp = (req, res, next) => {
    console.log(req);
    retrieve();
    async function retrieve () {
        console.log(req.param.appName);
        //let appData        =     await retrieveAppData.retrieveAllApps();
        // res.send(appData);
    }
}