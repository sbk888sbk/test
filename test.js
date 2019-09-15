const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const userRoutes = require('./src/routes/userRoutes');
const db = require('./src/db/database');
const user = require('./src/schemas/userSchema');




app.get('/user', (req, res, next) => {
    
    user.find({})
    .exec(function(err, users) {
        if(err) {
          res.send('error occured')
        } else {
          console.log(users);
          res.json(users);
        }
      });
});









app.listen(4001);