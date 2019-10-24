const user = require('../schemas/userSchema');


exports.validCredentials = async function (email) {
    console.log("Inside validate credentails");
    var uE = await  user.findOne({email}) 
        return uE;        
}

exports.registerUser = async function(userObj){
    console.log("Inside register user");
    var uR = new user(userObj);
    uR.save(function(err){
        if(err){
            return 'error occured during register'
        }
    })
}