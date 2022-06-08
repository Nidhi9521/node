const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydata", () => { console.log("db") })
const employeesSchema = mongoose.Schema(
    {
        "EmpId": { type: Number, required: true },
        "FirstName": { type: String, required: true },
        "LastName": { type: String, required: true },
        "Assignments": [
            {
                "AssignmentId": { type: Number, required: true },
                "AssignmentCategory": { type: String, required: true },
                "AssignmentName": { type: String, required: true },
                "AssignmentStatus": { type: String, required: true },

            }

        ]

    })
const employeesModel = mongoose.model("employees", employeesSchema);

module.exports = employeesModel;