const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/data", () => { console.log("db") });



const employeeSchema = mongoose.Schema(
    {
        _id: { type: Number, required: true, min: 0 ,unique : true },
        name: { type: String, required: true, minlength: 3 },
        // Fees: {
        //     amount: { type: Number, required: true, min: 0, max: 10000 },
        //     PaymentDate: { type: Date, default: Date.now },

        // },
        Result: {
            Total: { type: Number, min: 0, max: 300, get: v => Math.round(v), set: v => Math.round(v) },
            Grade: { type: String, enum: ["A", "B"] }
        }
    }
)


const empmodel = mongoose.model("employees", employeeSchema);
module.exports = empmodel;