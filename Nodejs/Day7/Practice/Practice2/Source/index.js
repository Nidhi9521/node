var  express = require('express')
var fs = require('fs');
const app = express()
app.use(express.json());

app.listen(3000,(req,res)=> {
    console.log("server listen on poer 3000")
});

app.get('/', (req,res) => {
    res.send("welcome employee");
    res.end();
})


app.get("/employee", (req,res) => {
    fs.readFile("./employee.json",(err,data)=> {
        if(data){
            res.send(JSON.parse(data));
            res.end();
        }
    })
})

app.get("/employee/:id", (req,res) => {
    fs.readFile("./employee.json",(err,data)=> {
        if(data){
            data1 = [];
            data1 = JSON.parse(data);
            var newdata = data1.find(c => c.id === parseInt(req.params.id));
            console.log(newdata);
            res.send(newdata);
            res.end();
        }
    })
})

app.put("/employee/:id" , (req,res) => {
    fs.readFile("./employee.json",(err,data)=> {
        if(data){
            data1 = [];
            data1 = JSON.parse(data);
            var newdata = data1.find(c => c.id === parseInt(req.params.id));
            newdata.name = req.body.name;
            newdata.displayname = req.body.displayname;
            newdata.Dlno = req.body.Dlno;
            newdata.dob = req.body.dob;
            newdata.address = req.body.address;
            newdata.state = req.body.state;
            newdata.country = req.body.country;
            fs.writeFile("employee.json",JSON.stringify(data1),(err)=> {
                if(err){
                    console.log(err);
                }
                console.log("data write suceful");
            });
            console.log(newdata);
            res.send(data1);
            res.end();
        }
    })
})
