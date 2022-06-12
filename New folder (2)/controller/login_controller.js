var express = require('express');

var router = express.Router();

var jwt = require('jsonwebtoken');
const config = require("../authnetication/global_config")


router.post("/",(req,res,next )=>{
    let userdata = {
        username: req.body.username,
        password: req.body.password,
    };
    

    let token = jwt.sign(config,config.key,{
        algorithm: config.algorithm,
        expiresIn: "1d"
    })
    if(userdata.username == "admin" && userdata.password == "admin"){
        res.status(200).json({
            message : "Login sucessfule",
            jwtoken:   token
        });
    }else{
        res.status(401).json({
                message: "login failed"
        })
    }

}
)


module.exports = router;
