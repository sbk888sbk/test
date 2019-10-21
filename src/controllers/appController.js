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
        let appData        =     await retrieveAppData.retrieveApp(req.params.appName);
        res.send(appData);
    }
}

exports.addAppDetails = (req, res, next) => {

    var app = {
        version             : 0,
        latest              : true,
        appName             : req.body.appName,
        appDescription      : req.body.appDescription,
        appServerInfo       : req.body.appServerInfo,
        dbServerInfo        : req.body.dbServerInfo,
        ihsServerInfo       : req.body.ihsServerInfo,
        healthCheckUrl      : req.body.healthCheckUrl,
        logsPath            : req.body.logsPath,
        testIds             : req.body.testIds,
        latestCodePath      : req.body.latestCodePath,
        documentsPath       : req.body.documentsPath
    } 

    checkAppAndInsert();
    
    async function checkAppAndInsert () {
        //check if app is alredy present
        let appData        =     await retrieveAppData.retrieveApp(app.appName);

        // if present increment version and  update "latest" flag for old data to false
        console.log("appData.version",appData.version)
        if(appData){
            await retrieveAppData.updateOldAppData(app.appName);
            console.log("appversion befpre :",appData.version);
            app.version = appData.version + 1 ;
            console.log("appversion after:",app.version)
        }

        //inserting app with modifications(if alredy present)
        let a        =     await modifyAppData.insertApp(app);
        console.log("Inserted app :",app.appName," with version :", app.version)
        return res.send("App Details added successfully") 
    }
}

exports.retrieveAppHistory = (req, res, next)  => {
    app = {
        appName :req.params.appName
    }
    console.log(req)
    history();
    async function history () {
    let appData        =     await retrieveAppData.retrieveAppHistory(app.appName);
    return res.send(appData);
    }
}

// exports.uploadFile = (req, res, next) => {
//     console.log(req)
//     return res.send('file read');
// }