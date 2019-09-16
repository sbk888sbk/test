const retrieveAppData = require('../models/retrieveAppData');
const modifyAppData = require('../models/modifyAppData');

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

exports.addAppDetails = (req, res, next) => {
    var app = {
        appName             : req.body.appName,
        appDescription      : req.body.appDescription
    }    
    console.log(req.body)
    insert();

    async function insert () {
        let appData        =     await modifyAppData.insertApp(app);
        res.send("App Details added successfully")
    }
}