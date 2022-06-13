const Studentdomain = require("../domain/student_domain");
var express = require('express');
var router = express.Router();

class StudentController {

    static async cretestudennt(req,res){
        const studentdomain = new Studentdomain();
        studentdomain.cretestudent(req,res)
    }
}


router.post("/:name",StudentController.cretestudennt);

module.exports = router;