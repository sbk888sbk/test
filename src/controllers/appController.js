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
    console.log("=============STARt============")
    appData = {}

    var app = {
        Version                     : 0,
        Latest                      : true,
        ApplicationName             : req.body.appName,
        ApplicationDescription      : req.body.appDescription,
        AppServerInfo               : req.body.appServerInfo,
        DatabaseServerInfo          : req.body.dbServerInfo,
        ihsServerInfo               : req.body.ihsServerInfo,
        healthCheckUrl              : req.body.healthCheckUrl,
        LogsPath                    : req.body.logsPath,
        TestIds                     : req.body.testIds,
        LatestCodePath              : req.body.latestCodePath,
        DocumentsPath               : req.body.documentsPath
    } 

    checkAppAndInsert();
    
    async function checkAppAndInsert () {
        //check if app is alredy present
        
        try{
            let appData        =     await retrieveAppData.retrieveApp(app.appName);
            
            // if present increment version and  update "latest" flag for old data to false
            
            console.log("appData",appData)
            if( appData && Object.keys(appData).length > 0){
                if(appData.version + 1 != app.version){
                    console.log("App is already present in the DB. Hence modifying setting the latest flag to false and updating the app version");
                    // setting the latest flag
                    await retrieveAppData.updateOldAppData(app.appName);
                    console.log("Latest flag updated, current appversion before modifying:",appData.version);
                    app.version = appData.version + 1 ;
                }
            }
        }catch(err){
            console.log("Error occired during retreive app and modifying app details", err)
        }


        try{
            //since we cannot directly compare objects verifying if app version if the app is not present app version will be undefined
            if(typeof(app.version) != NaN ){ 
                //inserting app (with modifications if alredy present)
                let a        =     await modifyAppData.insertApp(app);
                console.log("Inserted app :",app.appName," with version :", app.version)
                console.log("=============END============")
                return res.send("App Details added successfully") 
            }else {
                return res.send("App Details not added. Please try again") 
            }
        }catch(err){
            console.log("Error occured during inserting app details", err)
        }
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