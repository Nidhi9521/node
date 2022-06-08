const mongoose = require('mongoose');   
mongoose.connect('mongodb://localhost:27017/mydata');

const studentSchema =  mongoose.Schema({
    
        "ID": {type : Number, required : true ,   unique: true},
        "Name": {type : String, required : true, minlength: 3 , maxlength: 30},
        "Address": {type : String, required : true , lowercase : true},
        "Fees": {
            "Amount": {type : Number, required : true , max : 100000},
            "PaymentDate": {type : Date,  default:Date.now },
            "Status": {type : String, required : true}
        },
        "Result": {
            "Hindi": {type : Number, required : true ,min: 0 , max : 100},
            "Eng": {type : Number, required : true ,min: 0 , max : 100},
            "Math": {type : Number, required : true ,min: 0 , max : 100},
            "Total": {type : Number, required : true , min : 0 ,max : 300 , get: v => Math.round(v) , set : v=>Math.round(v)},
            "Grade": {type : String, required : true}
        }

});


const studentmodel = mongoose.model('students', studentSchema);
// var st = new studentSchema({Id: 1,Name: "xyz",Address:"kalol"});
// st.sava().then(() => console.log("data added"));

module.exports = studentmodel;

