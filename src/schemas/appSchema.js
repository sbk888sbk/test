const mongoose = require('mongoose')



const appSchema = new mongoose.Schema({
  appName: {
    type: String,
    unique: true,
    required: [true, 'App Name is required']
  },
  appDescription: {
    type: String,
    required: [true, 'Description is required']
  }
})
module.exports = mongoose.model('users',appSchema, collection='apps')
//mongoose.model('<dbname>',<schemaname>,<collcetion=collectionname>)