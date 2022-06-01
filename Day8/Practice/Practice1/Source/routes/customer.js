var express = require('express');
var router = express.Router();
let jwt = require("jsonwebtoken");

router.use(function (req, res, next) {
    var token = req.headers['x-access-token'];
    console.log(token);

    jwt.verify(token, global.config.secretKey, {
        algorithm: global.config.algorithm
    },
        function (err, decoded) {
            if (err) {
                let errordata = {
                    message: err.message,
                    expiredAt: err.expiredAt
                };
                console.log(errordata);
                return res.status(401).json({
                    message: "Unauthorized access"
                });

            }
            req.decode = decoded;
            console.log(decoded);
            next();
        }
    )

})

/* get customer without protection*/

router.get('/data', function (req, res, next) {
    let customerdata = [
        {
            customerid: 1,
            customername: "akash"
        },
        {
            customerid: 2,
            customername: "asd"
        },
        {
            customerid: 3,
            customername: "abc"
        },
    ];
    res.json(customerdata);
});

module.exports = router;