const  express = require('express')
const app = express();
const port = 3000;
app.use(express.json());
const usercontroller = require("./controller/usercontroller")
const usermodel = require('./module/usersschema');
const userdomain = require('./domain/userdomain')




app.get('/', (req, res) => res.send('Hello World!'))
// app.post('/users', usercontroller);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.post('/users', function(req,res){

    var data = new usermodel(req.body);
        try {
             data.save();
            res.send("data added");
        }
        catch(err){
            res.send(err.message);
            res.end();
        }

    
})


app.delete('/users/:id' , function(req,res){

    var data = usermodel.deleteOne({id : parseInt( req.params.id)});
    res.send("dat deletde");
})


app.put('/users/:id', function(req,res){
    var data = usermodel.updateOne({id: req.params.id} , {$set : {first_name : req.body.name}});
    res.send("dat update")
})


app.get("/users" , function(req,res){
    var data = usermodel.find();
    res.send(JSON.parse(data));
})
