const user = require('../schemas/userSchema');
var userResponse;

exports.validCredentials = async function (email) {
    var uE = await  user.findOne({email}, (err, eM) => {
            if(err) {
                return 'error occured'
            } else {
                userResponse = eM    
                return eM;            
            }
        });
        return userResponse;        
}

exports.registerUser = async function(userObj){
    var uR = new user(userObj);
    uR.save(function(err){
        if(err){
            return 'error occured during register'
        }
    })
}