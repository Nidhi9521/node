const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/data",() => { console.log("db") });


const techerschema = mongoose.Schema({
    tname: {type: String, required: true}
})


const teachmodel = mongoose.model("techers",techerschema);

module.exports = teachmodel;