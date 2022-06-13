var teachmodel = require('../model/teacherschema');
var joi = require('@hapi/joi')



class teacherDomain {   
    async creteTecher(req,res){
        var data = {
            "tname" : req.body.tname
        }

        const schema = joi.object({
            tname: joi.string().min(3)
        })

        const {error} = schema.validate(data);

        if(error){
            res.send(error.details[0].message);
        }
        else {
            const tdata = teachmodel(data);
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


module.exports = teacherDomain;