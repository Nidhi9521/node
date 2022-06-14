var Userdomain = require("../domain/userdomai");
const express = require('express');
const app = express();
var router = express.Router();
app.use(express.json());

class Usercontroller {

    static async creteuser (req,res){
        const userdomain = new Userdomain();
        userdomain.creteuser(req,res);
    }


    static async getuser (req,res){
        const userdomain = new Userdomain();
        userdomain.getuser(req,res);
    }

}


router.post('/',Usercontroller.creteuser);
router.get('/',Usercontroller.getuser);

module.exports = router;