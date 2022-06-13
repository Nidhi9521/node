const studentmodel = require('../model/employees_schema');
const teachmodel = require("../model/teacherschema");
var Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi)



class Studentdomain {

    async cretestudent(req,res){
        var findt = await teachmodel.findOne({tname : req.params.name})
        console.log(findt);

        var newstd = {
            "sname" : req.body.name,
            "techid" : [findt._id]

        }
        const schema = Joi.object ({
            sname : Joi.string().min(0),
            techid : Joi.objectId()

        })

        const {error} = schema.validate(newstd);

        if(error){
            res.send(error.details[0].message);
        }
        else {
            const tdata = studentmodel(data);
            try{
                await tdata.save();
                res.send("data added")
            }
            catch (err){
                res.send(err.message);
            }
        }


    }
}


module.exports = Studentdomain;