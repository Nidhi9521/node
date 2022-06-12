var express = require('express')
var empmodel = require('../model/employees_schema');
var joi = require('@hapi/joi')


class empDomain {

    async addemp(req, res) {
        var newdata = {
            "_id": req.body._id,
            "name": req.body.name,
            "Grade" : req.body.Grade
        }

        const scheme = joi.object({
            _id: joi.number().min(0),
            name: joi.string().min(3),
            Grade : joi.string().min(0),

        })

        const { error } = scheme.validate(newdata);


        if (error) {
            res.send(error.details[0].message)
        }
        else {
            var data = new empmodel(newdata);
            try {
                await data.save();
                res.send("data addes");
                res.end();
            }
            catch (err) {
                res.send(err.message);
                res.end();
            }
        }


    }


    async getemp(req,res){
        empmodel.find({} , function(err,result){
            if(result){
                res.send(result);
                res.end();
            }
            if(err){
                res.send(err);
                res.end();
            }
        })
    }


    async getAnemp(req,res){
        empmodel.find({name : req.params.id}, function(err,result){
            if(result.length == 0){
                res.send("not found");
                res.end();
            }
            else {
                res.send(result);
                
                res.end();
            }
        })
    }


    async updateEmp (req,res){
        empmodel.find({name : req.params.id}, function(err,result){
            if(result.length == 0){
                res.send("not found");
                res.end();
            }
            else {
                var newdata = {
                    "name": req.body.name,
                }
        
                const scheme = joi.object({
                    name: joi.string().min(3),
        
                })
        
                const { error } = scheme.validate(newdata);

                if (error) {
                    res.send(error.details[0].message)
                }
                else {
                   var newvalue = {$set : { name : req.body.name }}
                   empmodel.updateMany({name : req.params.id} , newvalue , function(errr,nresult){
                    if(errr){
                        res.send(errr)
                    }
                    res.send(nresult);
                   })
                }
            }
        })
    }



    
    async delAnemp(req,res){
        empmodel.deleteMany({name : req.params.id}, function(err,result){
            if(err){
                res.send("not found");
                res.end();
            }
            else {
                res.send(result);
                
                res.end();
            }
        })
    }


    async addresult (req,res){

        var resultdat = {
            "Total" : req.body.total,
            "Grade" :req.body.grad

        }

        const scheme = joi.object({
            Total : joi.number().min(0).max(0),
            Grade : joi.string().min(1).max(1)
        })

        const {error} = scheme.validate(resultdat);

        if(error){


            res.send(error.details[0].message);

        }

        else {

            var data = await empmodel.findOne({_name : req.params.name});
            if(data){

                

            }

        }
    }






}


module.exports = empDomain;