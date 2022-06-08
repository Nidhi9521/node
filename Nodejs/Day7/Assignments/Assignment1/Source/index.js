var express = require('express')
var app = express();
var fs = require("fs");
app.use(express.json());




app.get('/', (req, res) => {
    res.send("welcome employee");
    res.end();
})


// Get All Assignments http://localhost:3000/emps/{empID}/child/assignments
app.get('/emps/:id/assignments', (req, res) => {
    fs.readFile("assignment.json", "utf-8", (err, data) => {
        if (err) {
            res.send(err);
        } if (data) {
            data1 = [];
            data1 = JSON.parse(data);
            const result = data1.find(c => c.id === parseInt(req.params.id))
            console.log(result);
            res.send(result.assignments);
            res.end()
        }
    })
});

// Get an Assignment http://localhost:3000/emps/{empID}/assignments/{AssignmentID}
app.get("/emps/:id/assignment/:AssignmentId", (req, res) => {
    data1 = [];
    fs.readFile("assignment.json", (err, data) => {
        data1 = JSON.parse(data);
        const result = data1.find(d =>
            d.id === parseInt(req.params.id)
        )
        var ass = result.assignments;
        const result1 = ass.find((d) => d.AssignmentId === (req.params.AssignmentId));

        console.log(result1);
        console.log(data1);
        res.send(result1);
        res.end();

    })

})



app.put('/emps/:id/ass/:aid', (req, res) => {
    fs.readFile('assignment.json', "utf-8", function (err, data) {
        data1 = [];
        data1 = JSON.parse(data);
        var newData = data1.find(r => r.id === parseInt(req.params.id))
        var myNewdata = newData.assignments.find(s => s.AssignmentId === (req.params.aid));
        console.log(myNewdata);
        console.log(req.body.name);
        console.log(myNewdata.AssignmentName);
        myNewdata.AssignmentName = req.body.name;
        fs.writeFile('assignment.json', JSON.stringify(data1), (err) => {
            if (err)

                console.log(err);

            else {

                console.log("File written successfully\n");

            }
        })
        console.log(newData);
        res.send(myNewdata);
        res.end();

    })

})
app.listen(3000, (req, res) => {
    console.log("server listen on poer 3000")
});


