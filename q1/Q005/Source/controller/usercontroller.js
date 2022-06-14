var Userdomain = require('../domain/userdomain')
const express = require('express');
const app = express();
var router = express.Router();
app.use(express.json());

class Usercontroller {

    static async creteuser (req,res){
        const userdomain = new Userdomain();
        userdomain.creteuser(req,res);
    }
    static async login (req,res){
        const userdomain = new Userdomain();
        userdomain.login(req,res);
    }


}


router.post('/',Usercontroller.creteuser);
router.post('/login',Usercontroller.login);


module.exports = router;