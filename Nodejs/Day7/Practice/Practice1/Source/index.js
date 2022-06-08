var  express = require('express')
const app = express()
app.use(express.json());
var logger = require('./logger')

app.use(logger);
app.use(express.static('public'));  

app.use(function(req,res,next){
    console.log("authentication");
    next();
})


app.listen(3000, function(){
    console.log("server listen on port 3000")
});

app.get('/' , (req,res)=>{
res.send("welcome");
})