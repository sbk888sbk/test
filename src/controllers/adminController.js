exports.registerUser = (req, res, next) => {

    res.send(JSON.parse('{"status" : "registered","userRole" : userRole, "message" : "Registration Successful"}'));
}

exports.deleteUser = (req, res, next) => {


    res.send(JSON.parse('{"status" : "deleted","userRole" : userRole, "message" : "Deleted User from the database"}'));
}