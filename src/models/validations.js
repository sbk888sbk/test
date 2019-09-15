const user = require('../schemas/userSchema');
var usersResults;
exports.validCredentials = async function (email) {
    var users = await  user.find({email}, (err, docs) => {
            if(err) {
                return 'error occured'
            } else {
                usersResults = docs
                console.log('User result', usersResults)    
                return docs;            
            }

        });
        console.log("Users is " , usersResults)
        return usersResults;        
}