var express = require("express");
var app = express();
let fs = require("fs");
app.use(express.json());


var server = app.listen(3000, function () {
    console.log("listeneing on port 3000");
})



app.get('/', (req, res) => {
    console.log("welcome");
    res.send("welcome");
    res.end();
})

app.get("/students", (req, res) => {
    fs.readFile("students.json", "utf-8", (err, data) => {
        if (err) {
            console.log("error");
            res.send("Error to getting data");
            res.end();
        } if (data) {
            console.log(data)
            res.send(data);
            res.end();
        }
    })
})


app.get("/students/:id", (req, res) => {

    fs.readFile("students.json", "utf-8", (err, data) => {
        if (err) {
            console.log("error");
            res.send("Error to getting data");
            res.end();
        } if (data) {
            data1 = [];
            data1 = JSON.parse(data);
            console.log(data1);
            var newdata = data1.find(c => c.ID === parseInt(req.params.id));
            console.log(newdata);
            res.send(newdata);
            res.end();
        }
    })
})


app.get("/students/:id/fee", (req, res) => {

    fs.readFile("students.json", "utf-8", (err, data) => {
        if (err) {
            console.log("error");
            res.send("Error to getting data");
            res.end();
        } if (data) {
            data1 = [];
            data1 = JSON.parse(data);
            console.log(data1);
            var newdata = data1.find(c => c.ID === parseInt(req.params.id));
            console.log(newdata.Fees);
            res.send(newdata.Fees);
            res.end();
        }
    })
})

app.get("/students/:id/result", (req, res) => {

    fs.readFile("students.json", "utf-8", (err, data) => {
        if (err) {
            console.log("error");
            res.send("Error to getting data");
            res.end();
        } if (data) {
            data1 = [];
            data1 = JSON.parse(data);
            console.log(data1);
            var newdata = data1.find(c => c.ID === parseInt(req.params.id));
            console.log(newdata.Result);
            res.send(newdata.Result);
            res.end();
        }
    })
})






