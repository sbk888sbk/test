const bodyParser = require('body-parser')
const express = require('express');
const app = express();

PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({extended:false}));

//custom routes
const userRoutes = require('./src/routes/userRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const applicationRoutes = require('./src/routes/applicationRoutes');

const usersdb = require('./src/db/database');




app.use('/admin',adminRoutes);
app.use('/user', userRoutes);
app.use('/appdetails', applicationRoutes)
app.use('/',(req, res, next) =>{
    return res.send('<html>    <body>                   <div  class="modal">            <form class="modal-content animate" method="post" action="/user/login">                <div>         <label for="email"><b>Username</b></label>          <input type="text" placeholder="Enter Email" name="email" id="email" required>              <label for="password"><b>Password</b></label>          <input type="password" placeholder="Enter Password" name="password" id="password" required>                      <button type="submit">Login</button>                       </form>    </div>                </body>    </html>    ');
});









app.listen(PORT, () => {
    console.log("Listening on port ...", PORT)
});