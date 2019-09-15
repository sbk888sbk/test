const bodyParser = require('body-parser')
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));


const userRoutes = require('./src/routes/userRoutes');

const db = require('./src/db/database');






app.use('/user', userRoutes);
app.use('/',(req, res, next) =>{
    return res.send('<html>    <body>                   <div  class="modal">            <form class="modal-content animate" method="post" action="/user/login">                <div>         <label for="email"><b>Username</b></label>          <input type="text" placeholder="Enter Email" name="email" id="email" required>              <label for="psw"><b>Password</b></label>          <input type="password" placeholder="Enter Password" name="psw" id="psw" required>                      <button type="submit">Login</button>                       </form>    </div>                </body>    </html>    ');
});









app.listen(4000, () => {
    console.log("Listening on port 4000")
});