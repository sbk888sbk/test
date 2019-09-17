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
    //ignore the fiels __id, __v while retrieve data from db
    var a = await  apps.findOne({appName, latest:true}, '-_id -__v', (err, aD) => {
        if(err) {
            return 'error occured'
        } else {
            appDetails = aD    
            return aD;            
        }
    });
    return appDetails;       
}

exports.updateOldAppData = async function (appName) {
    var a = await  apps.findOneAndUpdate({appName, latest:true}, {latest:false}, (err, aD) => {
        if(err) {
            return 'error occured'
        } else {
            appDetails = aD    
            return aD;            
        }
    });
    return appDetails;       
}


exports.retrieveAppHistory = async function (appName) {
    var a = await  apps.find({appName}, '-_id -__v', (err, aD) => {
        if(err) {
            return 'error occured'
        } else {
            appDetails = aD    
            return aD;            
        }
    });
    return appDetails;       
}