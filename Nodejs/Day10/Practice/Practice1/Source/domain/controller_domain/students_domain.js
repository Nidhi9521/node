const fs = require('fs');
var students = require('../../json/students.json');

class StudentDomain {

    getAllStudent(req,res) {
        res.json(students);
    }


    getStudentReacord(req,res) {
        let id = req.params.studentId;
        let a = students.find((d) => d.ID == id);
        if(a){
            students.forEach((value) => {
                if(id == value.ID){
                    res.json(value);
                }
            })
        }
        else{
            res.send("Record Not Available");
        }
    }

    getFees(req, res) {
        let id = req.params.studentId;
        console.log(id);
        let a = students.find((d) => d.ID == id);
        console.log(a);
        if (a) {
          students.forEach((value) => {
            if (id == value.ID) {
              res.json(value.Fees);
            }
          });
        } else {
          res.send("Record Not Available");
        }
      }

      getResult(req, res) {
        let id = req.params.studentId;
        //checking if record available
        let a = students.find((d) => d.ID == id);
        if (a) {
          students.forEach((value) => {
            if (id == value.ID) {
              res.json(value.Result);
            }
          });
        } else {
          res.send("Record Not Available");
        }
      }
}

module.exports = StudentDomain;