let mongoose = require('mongoose');



let usersdb ='mongodb+srv://admin:admin@testcluster-y5jh4.mongodb.net/users?retryWrites=true&w=majority'

module.exports= mongoose.connect(usersdb, { useNewUrlParser: true,  useUnifiedTopology: true }).then(
  console.log('connection to db successful')
)
