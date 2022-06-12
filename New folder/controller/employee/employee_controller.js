var express = require('express');
var router = express.Router();
var EmpDomain = require("../../domain/employee");


class EmpController {

    static async getAllEmpl (req,res){
        var empdomain = new EmpDomain();
        empdomain.getAllEmp(req,res);
    }

    static async getEmpl (req,res){
        var empdomain = new EmpDomain();
        empdomain.getEmp(req,res);
    }
}


router.get("/",EmpController.getAllEmpl);
router.get("/:id",EmpController.getEmpl);

module.exports = router;