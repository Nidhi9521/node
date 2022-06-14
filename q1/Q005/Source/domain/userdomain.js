var students = require("../usermodel");
const joi = require("@hapi/joi")

class UserDomain {
    async creteuser(req, res) {
        console.log(req.body)

        var newdata = {

            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email,
            "password": req.body.password

        }

        const schema = joi.object({

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
            var data = new students(req.body);


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



    async login(req, res) {
        var data = await students.findOne({ email: req.body.email })
        if (data) {
            var ndata = await students.find({ $and: [{ email: req.body.email }, { password: req.body.password }] })
            if (ndata) {
                res.send("suces");
            }
            else {
                res.send("not valid password")
            }
        } else {
            res.send("email noot exist")
        }
    }
}


module.exports = UserDomain;