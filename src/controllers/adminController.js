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
        let alreadyPresent        =     await retrieveUserData.validCredentials(user.email);
        console.log("already present", alreadyPresent)

        if(alreadyPresent){
            console.log(alreadyPresent.email," already exists")
            return res.send({"message":"User already present"})
        }else { 
            let response          =     await retrieveUserData.registerUser(user);
            user.password       =     "****";
            console.log('registered user with details \n'+JSON.stringify(user))
            return res.send({"message" :'registered user with details \n'+JSON.stringify(user)});
        }
    }

}

exports.updateUser = (req, res, next) => {


    res.send(JSON.parse('{"status" : "deleted","userRole" : userRole, "message" : "Deleted User from the database"}'));
}