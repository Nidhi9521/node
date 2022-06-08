
var fs = require('fs');
const args = process.argv.slice(2);
var name = args[0];

fs.writeFile('./person.txt',' Hello ' + name,function(err){
    if(err){
        console.log(err);
    }
})

fs.readFile("./person.txt",function(err,data){
    console.log(data.toString())
})