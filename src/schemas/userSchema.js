const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email Id  is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  userRole:{
    type:String,
    required: [true, 'User Role is required']
  },
  hasAccessTo:{
    type:String,
    default:'individual',
    required:[true, "This is required"]
  },
  applicationList:{
    type: [String],
    default : []
  }
})

module.exports = mongoose.model('user',userSchema, collection='users')