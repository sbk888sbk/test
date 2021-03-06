const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
app.use(cors());


PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//custom routes
const userRoutes = require('./src/routes/userRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const applicationRoutes = require('./src/routes/applicationRoutes');

const usersdb = require('./src/db/database');




app.use('/admin',adminRoutes);
app.use('/user', userRoutes);
app.use('/appdetails', applicationRoutes)
app.use('/',(req, res, next) =>{
    return res.send('<html>    <body>                   <div  class="modal">            <form class="modal-content animate" method="post" action="/user/login">                <div>         <label for="userEmail"><b>Username</b></label>          <input type="text" placeholder="Enter Email" name="userEmail" id="email" required>              <label for="userPassword"><b>Password</b></label>          <input type="password" placeholder="Enter Password" name="userPassword" id="userPassword" required>                      <button type="submit">Login</button>                       </form>    </div>                </body>    </html>    ');
});

app.listen(PORT, () => {
    console.log("Listening on port ...", PORT)
});