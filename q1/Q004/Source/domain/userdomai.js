var usermodel = require('../usersmodel');
const joi = require('@hapi/joi')


class Userdomain {

    async creteuser(req, res) {
        console.log(req.body)

        var newdata = {

            "id": req.body.id,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email,
            "password": req.body.password

        }

        const schema = joi.object({

            id: joi.number().min(1),
            first_name: joi.string().min(3).max(15),
            last_name: joi.string().min(3).max(15),
            email: joi.string().min(3).max(15),
            password: joi.string().min(3).max(15)
        })


        const { error } = schema.validate(newdata);

        if (error) {
            res.send(error.details[0].message)
        }
        else {
            var data = new usermodel(req.body);


            try {
                await data.save();
                res.send("data added");
            }
            catch (err) {
                res.send(err.message);
                res.end();
            }
        }
    }


    async getuser(req,res){
        usermodel.find({}, function(err,result){
            console.log(result);
            res.send(result)
        })
    }

}





module.exports = Userdomain;