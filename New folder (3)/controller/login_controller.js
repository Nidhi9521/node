var express = require("express");
const config = require("../authentication/global_config");
var router = express.Router();
var jwt = require('jsonwebtoken')


router.post('/', function(req,res,next){
    let userdata = {
        username : req.body.username,
        password : req.body.password
    }


    let token = jwt.sign(userdata, config.key , {
        algorithm: config.algorithm,
        expiresIn : "1d"
    })

    if(userdata.username == 'admin' && userdata.password == "admin"){
        res.status(200).json({
            message : "Login sucess",
            token : token
        })
    }
    else {
        res.status(401).json({
            message: "login failed"
    })
    }
})


module.exports = router