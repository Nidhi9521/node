var fs = require('fs');
var employee = require("../json/employee.json")

class EmpDomain {

    getAllEmp (req,res){
        res.send(employee);
        res.end();
    }


    getEmp(req,res){
        let id = req.params.id;
       var data= employee.find((d)=>d.EmpId == id);
       if(data){
           res.send(data);
           res.end();
       }
       else {
           res.send("Data Not found");
           res.end();
       }

    }
}


module.exports = EmpDomain;