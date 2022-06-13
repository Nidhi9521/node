const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/data",() => { console.log("db") });


const studentschema = mongoose.Schema({
    sname : {type: String ,required: true},
    techid : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "techers"
    }]
})


const studentmodel = mongoose.model("students",studentschema);
module.exports = studentmodel;