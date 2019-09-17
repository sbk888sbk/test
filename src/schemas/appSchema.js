const mongoose = require('mongoose')



const appSchema = new mongoose.Schema({
  version:{
    type: Number,
    required:[true,'Version is required'],
    default:0
  },
  latest:{
    type: Boolean,
    required:[true,"this is required"],
    default:true
  },
  appName: {
    type: String,
    required: [true, 'App Name is required']
  },
  appDescription: {
    type: String,
    required: [true, 'Description is required']
  }
})

module.exports = mongoose.model('users',appSchema, collection='apps')
//mongoose.model('<dbname>',<schemaname>,<collcetion=collectionname>)