const mongoose = require('mongoose')
const userSchema = require('./userSchema.js')
const User = mongoose.model('user', userSchema, 'user')

async function createUser(username) {
  return new User({
    username,
    created: Date.now()
  }).save()
}

async function findUser(username) {
  return await User.findOne({ username })
}

(async () => {
    //connection to mongo db
  const connector = mongoose.connect('mongodb+srv://admin:admin@testcluster-y5jh4.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true,useNewUrlParser: true } )
  
    //perform mongoose operations here
  
  const username = process.argv[2].split('=')[1]

  let user = await connector.then(async () => {
    return findUser(username)
  })

  

  if (!user) {
    console.log('User not found, hence creating a new record')
    user = await createUser(username)
  }else{
      console.log('User already exists!')
  }

  console.log(user.username)
  console.log('updating bob to daaad')

  User.update({username:username}, {$set:{ username: 'daaad' }})
  
  
  process.exit(0)
})()//calling asynch anonymous function