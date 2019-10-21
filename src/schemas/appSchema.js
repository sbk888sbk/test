const mongoose = require('mongoose')

// const stageAppServerSchema =   new mongoose.Schema({
//   stgAppServers:{
//     type: [String],
//     required:[true,'Stage server details is required']
//   }});

//   const prodAppServerSchema =   new mongoose.Schema({
//     prdAppServers:{
//       type: [String],
//       required:[true,'Prod server details is required']
//     }});

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
    type : String,
    required: [true, 'Description is required']
  },
  appServerInfo : {
    stageServers : { type: [String] ,required: true },
    prodServers : { type: [String] ,required: true },
    devServers : { type: [String] ,required: true }
  },
  dbServerInfo : {
    stageDBServers : { type: [String] ,required: true },
    prodDBServers : { type: [String] ,required: true },
    devDBServers : { type: [String] ,required: true }
  },
  ihsServerInfo : {
    stageIHSServers : { type: [String] ,required: true },
    prodIHSServers : { type: [String] ,required: true },
    devIHSServers : { type: [String] ,required: true }
  },
  healthCheckUrl : {
    type : String,
    required : true
  },
  logsPath : {
    type : String
  },
  testIds : {
    type : String,
    required : true
  },
  latestCodePath : {
    type : String,
    required : true
  },
  documentsPath : {
    type : String,
    required : true
  }
})

module.exports = mongoose.model('users',appSchema, collection='apps')
//mongoose.model('<dbname>',<schemaname>,<collcetion=collectionname>)