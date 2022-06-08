var fs = require('fs');
fs.readFile("./file.txt",function(err,data){
    console.log(data.toString())

    const consonants = data.toString().match(/[^aeiou]/gi);
    console.log(consonants.toString().split(',').join(''));
})


fs.unlink("person.txt",function(err){
    if(err){
        console.log(err);
    }
    console.log('file delted');
})

