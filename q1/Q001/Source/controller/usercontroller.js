const Userdomain = require("../domain/userdomain");
const express = require('express');
var app = express();
app.use(express.json());
const router = express.Router();


class usercontroller {

    static async creatuser (req,res){
        const userdomain = new Userdomain();
        userdomain.creteuser(req,res);
       
    }
}


router.post('/' , usercontroller.creatuser);

module.exports = router;