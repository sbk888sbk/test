const bodyParser = require('body-parser')
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));



const validations = require('../models/validations');


exports.validateUser = (req, res, next) => {
    console.log("Email id submitted",req.body.email)


    let email       =   req.body.email;
    let password    =   req.body.password;
    var response    =   {
        status    : "invalid",
        userRole  : "NA",
        message   : ""
    }
    checkCredentials();

    async function checkCredentials () {
        let user        =     await validations.validCredentials(email);
        if(!user){
            response.message =  "Our records do not have your email! Please register"
        } else {

            if(email === user.email){
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

exports.registerUser = (req, res, next) => {

    res.send(JSON.parse('{"status" : "registered","userRole" : userRole, "message" : "Registration Successful"}'));
}

exports.deleteUser = (req, res, next) => {


    res.send(JSON.parse('{"status" : "deleted","userRole" : userRole, "message" : "Deleted User from the database"}'));
}
