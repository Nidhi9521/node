const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/exteranal")

const userschema = mongoose.Schema({
    "first_name" : {type: String , required : true},
    "last_name" : {type: String , required : true},
    "email" : {type: String , required : true, unique: true},
    "password" : {type: String , required : true},
    "creted_date" : {type: Date , default :  Date.now()},

    
})


const usermodel = mongoose.model("students", userschema);
module.exports = usermodel;