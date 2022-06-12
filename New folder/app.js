const express = require("express");
const app = express();
app.use(express.json());
var logger = require('./middlewear/logger');
var login = require("./controller/logon/login");
var verifytoken = require('./authenticatioon/verifytoken');
var EmpController = require('./controller/employee/employee_controller')

app.use(logger);
app.get('/',function(req,res){
    res.send("server started");
    res.end();
});

app.use('/login',login);
app.use(verifytoken);
// app.get('/emps', function(req,res){
//     res.send("employee")
// })
app.use('/emps',EmpController)




app.listen(3000,()=>console.log("server listen on port 3000"));



