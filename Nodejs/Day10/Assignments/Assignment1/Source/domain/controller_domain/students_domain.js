const fs = require('fs');
var studentmodel = require("../../model/students");


class StudentDomain {

  getAllStudent(req, res) {
    studentmodel.find({}, function (err, result) {
      res.send(result);
      console.log(result)
      res.end();
    })

  }

  getStudentReacord(req, res) {
    let id = req.params.studentId;
    var query = { ID: id };
    studentmodel.find(query, function (err, result) {
      if (result.length == 0) {
        res.send("Data not found");
      } else {
        res.send(result);
        console.log(result)
        res.end();
      }
    })
  }

  getFees(req, res) {
    let id = req.params.studentId;
    var query = { ID: id };
    studentmodel.find(query, { Fees: 1, _id: 0 }, function (err, result) {
      if (result.length == 0) {
        res.send("Data not found");
      } else {
        res.send(result);
        console.log(result)
        res.end();
      }
    })
  }

  getResult(req, res) {
    let id = req.params.studentId;
    var query = { ID: id };
    studentmodel.find(query, { Result: 1, _id: 0 }, function (err, result) {
      if (result.length == 0) {
        res.send("Data not found");
      } else {
        res.send(result);
        console.log(result)
        res.end();
      }
    })
  }

  createStudent(req, res) {
    var data = new studentmodel(req.body);
    data.save().then(res.send("data sucefully added"));
    res.end();
  }


  deleteStudent(req, res) {
    var id = req.params.studentId
    var query = { ID: id };
    studentmodel.find(query, { Fees: 1, _id: 0 }, function (err, result) {
      if (result.length == 0) {
        res.send("Data not found");
      } else {
        studentmodel.deleteOne(query, function (err, result) {
          res.send("delete sucefullul");
          res.end();
        });
      }
    })
  }
}


module.exports = StudentDomain;