const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/exteranal")

const userschema = mongoose.Schema({
    "id": {type:Number , required: true, unique: true},
    "first_name" : {type: String , required : true},
    "last_name" : {type: String , required : true},
    "email" : {type: String , required : true, unique: true},
    "password" : {type: String , required : true},
    "creted_dat" : {type: Date , default :  Date.now()},

    
})


const usermodel = mongoose.model("emps", userschema);
module.exports = usermodel;