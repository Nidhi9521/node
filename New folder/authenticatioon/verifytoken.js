let jwt = require('jsonwebtoken');
let config = require('./global_config');


function verifytoken(req, res, next) {
    var token = req.headers['token'];
    console.log(token);

    jwt.verify(token, config.secretKey, {
        algorithms: config.algorithm

    },
        function (err, decoded) {
            if (err) {
                let errordata = {
                    message: err.message,
                    expireAt: err.expireAt
                }
                console.log(errordata);
                return res.status(401).json({
                    message: "unauthorised access"
                })
            }
            res.decoded = decoded;
            console.log(decoded);
            next();
        }
    );
}

module.exports = verifytoken;