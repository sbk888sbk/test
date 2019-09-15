const bodyParser = require('body-parser')
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));



const validations = require('../models/validations');


exports.validateUser = (req, res, next) => {
    console.log("Email id submitted",req.body.email)
    let email       =   req.body.email;
    let password    =   req.body.password;
    async () => {
    let user        =     await validations.validCredentials(email);
        console.log(user)
        if(!user){
            res.send("No data found")
        } else {
            console.log("Inside else")
            if(email === user.email){
                if(password = validations.validCredentials(password).password){
                    res.send(JSON.parse('{"status" : "valid","userRole" : userRole, "message" : "Login Successfull"}'));
                }
                else{
                    res.send(JSON.parse('{"status" : "invalid","userRole" : NA, "message" : "Invalid Password"}'))
                }
            } else{
                res.send(JSON.parse('{"status" : "invalid","userRole" : "NA", "message" : "Invalid Email ID"}'))
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
