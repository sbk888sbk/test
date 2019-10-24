const apps = require('../schemas/appSchema');

exports.insertApp = async function (app) {
    console.log("inside insert App")
    var appObj = new apps(app);
    appObj.save(function(err){
        if(err){
            return 'error occured during inserting app'
        }
    });     
}