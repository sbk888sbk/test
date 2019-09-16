const apps = require('../schemas/appSchema');

var  appDetails ;
exports.retrieveAllApps = async function () {
    var a = await  apps.find({}, '-_id', (err, aD) => {
        if(err) {
            return 'error occured'
        } else {
            appDetails = aD    
            return aD;            
        }
    });
    return appDetails;       
}


exports.retrieveApp = async function (appName) {
    var a = await  apps.findOne({appName}, '-_id', (err, aD) => {
        if(err) {
            return 'error occured'
        } else {
            appDetails = aD    
            return aD;            
        }
    });
    return appDetails;       
}