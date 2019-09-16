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