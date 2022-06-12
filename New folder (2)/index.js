const express = require("express");
const app = express();
app.use(express.json());
var fs = require("fs")
const joi = require('@hapi/joi');
var login = require("./controller/login_controller")
var verifytoken = require("./authnetication/verifytoken")
var http = require('http');
var url = require('url')



http.createServer(function (req, res) {
    // var myUrl = "http://localhost:3001/product?param1=5&param2=10"
    var q = url.parse(req.url, true).query;
    var name1 = q.name;
    console.log(name1);
    res.write(name1);

    res.end();
}).listen(3000);



app.listen(3000, function () {
    console.log("server started")
});


app.get('/', function (req, res) {
    res.send("hello")
})


app.put("/students/:id", function (req, res) {
    fs.readFile('students.json', function (err, data) {
        if (data) {
            var data1 = [];
            data1 = JSON.parse(data);
            var newd = data1.find(d => d.ID == req.params.id);
            var fees = newd.Fees;
            console.log(fees);
            fees.Amount = 100
            console.log(fees);
        }
    })
})


app.use("/login",login);
//app.use(verifytoken);
app.get("/customers", function (req, res) {
    fs.readFile('customer.json', 'utf-8', function (err, data) {
        if (err) {
            res.send(err);
            res.end();
        }
        if (data) {
            res.send(JSON.parse(data));
            res.end();
        }
    })
})


app.get("/customers/:id", function (req, res) {
    fs.readFile('customer.json', 'utf-8', function (err, data) {
        if (err) {
            res.send(err);
            res.end();
        }
        if (data) {
            var data1 = [];
            data1 = JSON.parse(data);
            var newdata = data1.find(d => d.id == parseInt(req.params.id));
            if (newdata) {
                res.send(newdata);
                res.end();
            }
            else {
                res.send("not found")
            }
        }
    })
})



app.post("/customers", function (req, res) {
    fs.readFile('customer.json', 'utf-8', function (err, data) {
        if (err) {
            res.send(err);
            res.end();
        }
        if (data) {
            var data1 = [];
            data1 = JSON.parse(data);
            var newdata = {
                "id": "",
                "name": req.body.name,
                "city": req.body.city
            }
            console.log(data1.length);
            const schema = joi.object({
                id: joi.number().min(1),
                name: joi.string().min(3),
                city: joi.string().min(3).max(15)
            });
            const { error } = schema.validate(newdata);
            if (error) {
                res.send(error.details[0].message);
            } else {
                data1.push(newdata);
                fs.writeFile('customer.json', JSON.stringify(data1), function (err) {
                    if (err) {
                        res.send(err)
                    }
                    res.send("data added");
                })
            }




        }
    })
})


app.put("/customers/:id", function (req, res) {

    fs.readFile("customer.json", function (err, data) {
        if (err) {
            res.send(err);
        }
        if (data) {
            var data1 = [];
            data1 = JSON.parse(data);
            var upd = data1.find(d => d.id == parseInt(req.params.id))

            if (upd) {
                let newdata = {
                    "name": req.body.name,
                    "city": req.body.city
                }

                const schema = joi.object({
                    name: joi.string().min(3),
                    city: joi.string().min(3)
                })

                const { error } = schema.validate(newdata);

                if (error) {
                    res.send(error.details[0].message)
                }
                else {
                    upd.name = req.body.name;
                    upd.city = req.body.city;
                    console.log(data1);
                }
            } else {
                res.send("customer not found");
            }


        }
    })

})



