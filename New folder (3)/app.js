var express = require('express');
var app = express();
app.use(express.json());
var verifytoken = require('./authentication/verifytoken');
var login = require("./controller/login_controller");
var empcontroller = require("./controller/emp_controller")
var TeacherController = require('./controller/techer_controller')
var StudentController = require("./controller/student_controller")



app.use('/login', login)
//app.use(verifytoken);

app.get("/", function(req,res){
    res.send("hello")
})

app.use("/emp" , empcontroller);
app.use("/tec",TeacherController);
app.use('/std',StudentController);


app.listen(3000, () => {
    console.log("server started")
})