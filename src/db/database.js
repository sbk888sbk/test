let mongoose = require('mongoose');

let db ='mongodb+srv://admin:admin@testcluster-y5jh4.mongodb.net/users?retryWrites=true&w=majority'

module.exports = mongoose.connect(db, { useNewUrlParser: true,  useUnifiedTopology: true }).then(
  console.log('connection successful')
)
