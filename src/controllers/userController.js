const retrieveUserData = require('../models/retrieveUserData');


exports.validateUser = (req, res, next) => {
    console.log(req)
    console.log("Email id submitted",req.body.userEmail)
    let email       =   req.body.userEmail;
    let password    =   req.body.password;
    var response    =   {
        status    : "invalid",
        userRole  : "NA",
        message   : ""
    }
    checkCredentials();

    async function checkCredentials () {
        console.log("Validating Credentials")
        let user        =     await retrieveUserData.validCredentials(userEmail);
        if(!user){
            console.log("Email Id does not exists")
            response.message =  "Our records do not have your email! Please register"
            return res.send(response)
        } else {
            if(email === user.userEmail){
                console.log('Email Id exists')

                if(password === user.password){
                    response.status     = "valid"
                    response.userRole   = user.userRole;
                    response.message    = "Login Successfull" ;
                    res.send(JSON.stringify(response));
                }
                else{
                    response.message = "Invalid Password";
                    res.send(JSON.stringify(response));
                }

            } else{
                response.message = "Invalid Email ID";
                res.send(JSON.stringify(response));
            }
        }


    }
}


