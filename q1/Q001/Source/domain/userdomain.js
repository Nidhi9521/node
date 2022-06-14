const usermodel = require("../module/usersschema");


class userdomain{

    async creteuser(req,res){
        var data = new usermodel(req.body);
        try {
            await data.save;
            res.send("data added");
        }
        catch(err){
            res.send(err.message);
            res.end();
        }

    }
}

module.exports = userdomain;