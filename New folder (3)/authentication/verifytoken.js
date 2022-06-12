let jwt = require('jsonwebtoken');
let config = require('./global_config')



function verifytoken(req, res, next) {
    var token = req.headers['token']
    jwt.verify(token, config.key, {
        algorithms: config.algorithm,

    },

        function (error, decoded) {
            if (error) {
                let errordata = {
                    message: error.message,
                    expiredAt: error.expiredAt,
                }
                console.log(error)
                console.log(errordata);
                return res.status(401).json({
                    message: "Unauthir"
                })
    
            }
            req.decoded = decoded,
        console.log(decoded),
        next();
            

        }

        


    );
}


module.exports = verifytoken;