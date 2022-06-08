var express = require("express");
var app = express();
let fs = require("fs");
app.use(express.json())

var server = app.listen(3000, function () {
    console.log("listeneing on port 3000");
})


app.get('/', (req, res) => {
    console.log("welcome");
    res.send("welcome");
    res.end();
})

// Create a Restful API, which will return Customer list in JSON format. http://localhost:3000/customers
app.get("/customers", (req, res) => {
    fs.readFile("customer.json", "utf-8", (err, data) => {
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

// Create a Restful API which will search a particular record from the customer list. http://localhost:3000/customers/1
app.get("/customers/:id", (req, res) => {

    fs.readFile("customer.json", "utf-8", (err, data) => {
        if (err) {
            console.log("error");
            res.send("Error to getting data");
            res.end();
        } if (data) {
            data1 = [];
            data1 = JSON.parse(data);
            console.log(data1);
            var newdata = data1.find(c => c.id === parseInt(req.params.id));
            console.log(newdata);
            res.send(newdata);
            res.end();
        }
    })
})

//Create a Restful API which will insert a new customer object in the customer list. http://localhost:3000/customer
app.post("/customer", (req, res) => {
    data1 = [];
    fs.readFile("customer.json", "utf-8", (err, data) => {
        if (err) {
            console.log("error");
            res.send("Error to getting data");
            res.end();
        } if (data) {
            data1 = JSON.parse(data);
            const newdata1 = {
                id : data1.length + 1,
                name : req.body.name,
                city: req.body.city
            }
            //data1.push(req.body);
            data1.push(newdata1);
            console.log(data1);
            fs.writeFile("./customer.json", JSON.stringify(data1), (err) => {
                console.log("File written");
            })
            res.send(data1);
            res.end();
        }
    })

})

//Create a Restful API which update a name of existing customer whose customer ID is 1 http://locahost:3000/customer
app.put("/customer/:id", (req, res) => {

    fs.readFile("customer.json", "utf-8", (err, data) => {
        if (err) {
            console.log("error");
            res.send("Error to getting data");
            res.end();
        }
        if (data) {
            data1 = [];
            data1 = JSON.parse(data);
            const result = data1.find((data) => {
                return data.id === parseInt(req.params.id);
            })
           result.name = req.body.name;
            console.log(result);
            fs.writeFile("./customer.json", JSON.stringify(data1), (err) => {
                console.log("File written");
            })
            res.send(data1);
            res.end();
        }
    })
})


//Create a Restful API which will delete a record from the customer list. http://localhost:3000/customer
app.delete("/customer/:id", (req, res) => {
    fs.readFile("customer.json", "utf-8", (err, data) => {
        if (err) {
            console.log("error");
            res.send("Error to getting data");
            res.end();
        } if (data) {
            data1 = [];
            data1 = JSON.parse(data);
            console.log(data1);
            var newdata = data1.find(c => c.id === parseInt(req.params.id));
            const index = data1.indexOf(newdata);
            data1.splice(index,1);
            console.log(newdata);
            fs.writeFile("./customer.json", JSON.stringify(data1), (err) => {
                console.log("File written");
            })
            res.send(data1);
            res.end();
        }
    })
})