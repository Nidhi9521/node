const  express = require('express')
const app = express()
const port = 3000
var fs = require('fs');
var usermodel = require('./model/userschema')




const csvFilePath= 'dummy.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
   fs.writeFile("dummy.json" , JSON.stringify(jsonObj) , function(err){

   })
})


app.get("/upload" , function(req,res){
    fs.readFile("dummy.json" , function(err,data){
        if(data){
            var data1 = [];
            data1 = JSON.parse(data);
            for(let i of data1){
                const nedata = new usermodel(i);
                nedata.save();
            }
        }
    })
})




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))