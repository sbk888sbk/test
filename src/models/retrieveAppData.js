const apps = require('../schemas/appSchema');

//this function will display all apps based on the filter latest: true. 
//If some apps are not being displayed which are present in db then it means there is not latest details realted to that app
//In that case modify "latest" value of that record to true
exports.retrieveAllApps = async function () {
    var a = await  apps.find({latest:true}, '-_id -__v');
    console.log("Inside retreive all apps")
    return a;       
}


exports.retrieveApp = async function (appName) {
    console.log("finding app with name", appName)
    //ignore the fiels __id, __v while retrieve data from db
    var a = await  apps.findOne({appName,latest:true});
    console.log("Inside retrive app function ")
    console.log("Returning appDetails with details ",a )
    return a;       
}

exports.updateOldAppData = async function (appName) {
    var a = await  apps.findOneAndUpdate({appName, latest:true}, {latest:false});
    console.log("Inside update Old data")
    return a;       
}


exports.retrieveAppHistory = async function (appName) {
    var a = await  apps.find({appName}, '-_id -__v');
    console.log("Inside retrieve App history")
    return a;       
}