const express = require("express");
const router = express.Router();

const adminController = require('../controllers/adminController');

//adminController.registerUser
router.post('/registerUser',adminController.registerUser );

router.get('/',(req,res,next)=>{
    console.log('admin logged in    ')
return res.send('<html><body><div class="modal">Register User : <br ><form class="modal-content animate" method="post" action="/admin/registerUser"><div> <label for="userEmail"><b>Username</b></label> <input type="text" placeholder="Enter Email" name="userEmail" id="userEmail" required> <label for="userPassword"><b>Password</b></label><input type="password" placeholder="Enter Password" name="userPassword" id="userPassword" required><br><br>User role<select name="userRole"><option value="admin">Admin</option><option value="superadmin">SuperAdmin</option><option value="user">User</option></select><br><br>Has Access to <select name="hasAccessTo"><option value="all">Admin</option><option value="individual">individual</option></select>Applications <input type="text" placeholder="Enter Applications" name="applications" id="applications"> <br><br><button type="submit">Login</button></form></div></body></html>');
});




module.exports=router;