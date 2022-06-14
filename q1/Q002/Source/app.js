const express = require('express')
const app = express()
app.use(express.json())
const port = 3000
const fs = require('fs')
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.get("/data" , function(req,res){
    fs.readFile('dummy.json', 'utf-8', function(err,data){
        res.send(JSON.parse( data))
    })
})


app.post("/data" , function(req,res){
    fs.readFile('dummy.json', 'utf-8', function(err,data){
        if(data){
            var data1 = [];
            data1 = JSON.parse(data);
            data1.push(req.body);
            fs.writeFile('dummy.json' , JSON.stringify(data1), function(err){
                res.send("data added")
            })
        }
    })
})


app.get("/data/:id" , function(req,res){
    fs.readFile('dummy.json', 'utf-8', function(err,data){
        if(data){
            var data1 = [];
            data1 = JSON.parse(data);
            var pdata = data1.find(d =>  d.id == parseInt(req.params.id))
            if(pdata){
                res.send(pdata);
            }
            else {
                res.status(404).send("data not found")
            }
        }
    })
})


app.get("/data/:id/fees" , function(req,res){
    fs.readFile('dummy.json', 'utf-8', function(err,data){
        if(data){
            var data1 = [];
            data1 = JSON.parse(data);
            var pdata = data1.find(d =>  d.id == parseInt(req.params.id))
            if(pdata){
                res.send(pdata.fees);
            }
            else {
                res.status(404).send("data not found")
            }
        }
    })
})



app.get("/data/:id/assignment" , function(req,res){
    fs.readFile('dummy.json', 'utf-8', function(err,data){
        if(data){
            var data1 = [];
            data1 = JSON.parse(data);
            var pdata = data1.find(d =>  d.id == parseInt(req.params.id))
            if(pdata){
                res.send(pdata.assignment);
            }
            else {
                res.status(404).send("data not found")
            }
        }
    })
})


app.get("/data/:id/assignment/:aid" , function(req,res){
    fs.readFile('dummy.json', 'utf-8', function(err,data){
        if(data){
            var data1 = [];
            data1 = JSON.parse(data);
            var pdata = data1.find(d =>  d.id == parseInt(req.params.id))
            if(pdata){
                var asdata = pdata.assignment.find(d => d.assignmentid == parseInt(req.params.aid));
                if (asdata){
                res.send(asdata);
                }
                else {
                    res.status(404).send("assignment not found")
                }
            }
            else {
                res.status(404).send("data not found")
            }
        }
    })
})