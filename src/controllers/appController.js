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
    retrieve();
    async function retrieve () {
        console.log(req.params.appName);
        let appData        =     await retrieveAppData.retrieveApp(req.params.appName);
        console.log(appData)
        res.send(appData);
    }
}