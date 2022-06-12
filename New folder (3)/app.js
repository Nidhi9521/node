var express = require('express');
var app = express();
app.use(express.json());
var verifytoken = require('./authentication/verifytoken');
var login = require("./controller/login_controller");
var empcontroller = require("./controller/emp_controller")



app.use('/login', login)
//app.use(verifytoken);

app.get("/", function(req,res){
    res.send("hello")
})

app.use("/emp" , empcontroller);


app.listen(3000, () => {
    console.log("server started")
})