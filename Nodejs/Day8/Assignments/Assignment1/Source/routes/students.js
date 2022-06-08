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

router.get('/Fees', function (req, res, next) {
    let studentdata = [
        {
            "ID": 1,
            "Name": "Reena",
            "Address": "Ahmedabad",
            "Fees": {
                "Amount": 10000,
                "PaymentDate": "12/12/2020",
                "Status": "true"
            },
           
        },
        {
            "ID": 2,
            "Name": "Rita",
            "Address": "Surat",
            "Fees": {
                "Amount": 12000,
                "PaymentDate": "12/12/2020",
                "Status": "false"
            },
           
        }
    ];
    res.json(studentdata);
});


router.get('/Result', function (req, res, next) {
    let studentdata = [
        {
            "ID": 1,
            "Name": "Reena",
            "Address": "Ahmedabad",
            
            "Result": {
                "Hindi": 80,
                "Eng": 70,
                "Math": 60,
                "Total": 210,
                "Grade": "A"
            }
        },
        {
            "ID": 2,
            "Name": "Rita",
            "Address": "Surat",
            
            "Result": {
                "Hindi": 80,
                "Eng": 70,
                "Math": 60,
                "Total": 210,
                "Grade": "A"
            }
        }
    ];
    res.json(studentdata);
});

module.exports = router;