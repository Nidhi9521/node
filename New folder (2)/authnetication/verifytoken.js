let jwt = require('jsonwebtoken');
const config = require("./global_config");

function verifytoken (req,res,next){
    var token = req.headers['token']

    jwt.verify(token, config.key , {
        algorithms : config.algorithm
    },

    function(err,decoded){
        if(err){
            let errordata = {
                message : err.message,
                expireAt : err.expiredAt
            };
            console.log(err);
            return res.status(401).json({
                message : "unauthorsed"
            })
        }

        req.decoded = decoded;
        console.log(decoded);
        next();
    }
    )
}


module.exports = verifytoken;