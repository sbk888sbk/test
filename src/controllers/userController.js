const retrieveUserData = require('../models/retrieveUserData');


exports.validateUser = (req, res, next) => {
    console.log("Email id submitted",req.body.email);
    let email       =   req.body.userEmail;
    let password    =   req.body.userPassword;
    var response    =   {
        status    : "invalid",
        userRole  : "NA",
        message   : ""
    }
    checkCredentials();

    async function checkCredentials () {
        console.log("Validating Credentials :", email);
        let user        =     await retrieveUserData.validCredentials(email);
        if(!user){
            console.log("Email Id does not exists")
            response.message =  "Our records do not have your email! Please register"
            
        } else {
            if(email === user.email){
                console.log('Email Id exists')

                if(password === user.password){
                    response.status     = "valid"
                    response.userRole   = user.userRole;
                    response.message    = "Login Successfull" ;
                    response.appsAccess = user.applicationList;
                }
                else{
                    response.message = "Invalid Password";
                    
                }

            } else{
                response.message = "Invalid Email ID";
                
            }
        }
        res.send(JSON.stringify(response));


    }
}


