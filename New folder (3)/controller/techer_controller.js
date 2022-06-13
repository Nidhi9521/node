const TeacherDomain = require("../domain/techer_domain");
var express = require('express');
var router = express.Router();

class TeacherController {
    static async createtecher (req,res){
        const techerdomain = new TeacherDomain();
        techerdomain.creteTecher(req,res);
    }
}


router.post("/" , TeacherController.createtecher);

module.exports = router;