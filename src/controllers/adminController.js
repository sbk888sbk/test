const retrieveUserData = require('../models/retrieveUserData');


exports.registerUser = (req, res, next) => {

    //creating an user object to insert into db
    var user        =   {
        email       :   req.body.userEmail,
        password    :   req.body.userPassword,
        userRole    :   req.body.userRole,
        hasAccessTo :   req.body.hasAccessTo,
        applicationList : req.body.applicationList
    }

    register();
    
    async function register () {
        let alreadyPresent        =     await retrieveUserData.validCredentials(user.userEmail);

        if(alreadyPresent){
            return res.send("User already present")
        }else { 
            let response          =     await retrieveUserData.registerUser(user);
            user.password       =     "****"
            return res.send('registered user with details \n'+JSON.stringify(user));
        }
    }

}

exports.updateUser = (req, res, next) => {


    res.send(JSON.parse('{"status" : "deleted","userRole" : userRole, "message" : "Deleted User from the database"}'));
}