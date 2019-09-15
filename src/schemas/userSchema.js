const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email Id  is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  userRole:{
    type:String,
    required: [true, 'User Role is required']
  }
})

module.exports = mongoose.model('user',userSchema, collection='users')