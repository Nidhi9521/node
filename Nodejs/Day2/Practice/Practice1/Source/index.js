
var fs = require('fs');
fs.readFile("./person.txt",function(err,data){
    console.log(data.toString())
})

fs.appendFile("./person.txt",' hello india',function(err){
    if(err){
        console.log('error')
    }
    
})