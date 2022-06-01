var express = require('express');
let jwt = require("jsonwebtoken");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* post user login*/

router.post('/login' , function(req,res,next) {
  let userdata = {
    username : req.body.username,
    password : req.body.password

  };

  let token = jwt.sign(userdata,global.config.secretKey,{
    algorithm : global.config.algorithm,
    expiresIn : '5m'
  });

  //go to server for user verfication
  if(userdata.username == "admin" && userdata.password == "admin"){
    res.status(200).json({
      message: 'Login sucessful',
      jwtoken : token
    });
  }
   else {
     res.status(401).json({
       message:"Login failed"
     })
   }

})

module.exports = router;
