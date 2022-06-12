var express = require('express');
var router = express.Router();
var empDomain = require("../domain/emp_domain")



class EmpController {

    static async createemp(req,res){
        const empdomain = new empDomain();
        empdomain.addemp(req,res);
    }


    static async getemp(req,res){
        const empdomain = new empDomain();
        empdomain.getemp(req,res);
    }

    static async getANemp(req,res){
        const empdomain = new empDomain();
        empdomain.getAnemp(req,res);
    }


    static async updateemp(req,res){
        const empdomain = new empDomain();
        empdomain.updateEmp(req,res);
    }


    static async deletemp(req,res){
        const empdomain = new empDomain();
        empdomain.delAnemp(req,res);
    }
}



router.post("/" , EmpController.createemp);
router.get('/',EmpController.getemp);
router.get('/:id',EmpController.getANemp);
router.put('/:id',EmpController.updateemp);
router.delete('/:id',EmpController.deletemp);

module.exports = router;