var express = require("express");
var employees = require('../../json/employees.json')
var fs = require("fs");

class EmployeeDomain {
    getAllEmployee(req, res) {
        res.json(employees);
        res.end();
    }

    getAnEmployee(req, res) {
        let id = req.params.EmpId;
        let data = employees.find((e) => e.EmpId == id);
        if (data) {
            employees.forEach((value) => {
                if (value.EmpId == id) {
                    res.json(value);
                }
            });
            //res.send(data);
        }
        else {
            res.status(404).send("data not found");
        }
    }


    createAnEmployee(req, res) {
        let data = req.body;
        employees.push(data);

        fs.writeFile('./json/employees.json', JSON.stringify(employees), (err) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.status(200).send(employees);
            }
        })
    }



    getAllAssignment (req,res) {
        let id = req.params.EmpId;
        let data = employees.find((d) => d.EmpId == id);
        console.log(data);
        if (data) {
            employees.forEach((value) => {
                if (value.EmpId == id) {
                    res.json(value.Assignments);
                }
            });
            //res.send(data);
        }
        else {
            res.status(404).send("data not found");
        }
    }


    getAnAssignment(req,res){
        let id = req.params.EmpId;
        let assignmetid = req.params.AssignmentId;
        let data = employees.find((d) => d.EmpId == id);
        if(data){
            employees.forEach((value) => {
                if(value.EmpId == id){
                    var a = value.Assignments.find((a)=> a.AssignmentId == assignmetid);
                    if(a){
                        console.log(a);
                       // res.send(value.Assignments);
                       res.send(a);
                    }
                }
            })
        }
    }


    updateAnEmployee(req, res) {
        let data = req.body;
        const isAvail = employees.find((e) => e.EmpId == data.EmpId);
        if (isAvail) {
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].EmpId == data.EmpId) {
                    employees[i].FirstName = data.FirstName;
                    employees[i].LastName = data.LastName;
                    fs.writeFile(
                        "./json/employees.json",
                        JSON.stringify(employees),
                        (err) => {
                            if (err) {
                                console.log(err);
                                res.end();
                            } else {
                                res.status(200).send("Emloyee Data Updated Successfully");
                            }
                        }
                    );
                    break;
                }
            }
        } else {
            res.status(404).send("Data Not Found");
        }
    }

    
}

module.exports = EmployeeDomain;    