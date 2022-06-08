
var http = require('http');
var url = require('url');


http.createServer(function (req, res) {
    var q = url.parse(req.url, true).query;
    var name1 = q.name;
    var firstv = "";

    if(name1 == undefined)
    {
        res.write('add string')
    }
    else {
        for (var i = 0; i < name1.length; i++) {
            //  firstv += name[i];
              if (name1[i].match(/[aeiou]/ig)) {
                  firstv += name1[i];
              }
          }
         
          if (firstv == "") {
              res.write("no vowel in string")
          }
          else {
             
              res.write(`first vowel in ${name1} is ${firstv[0]}`);
          }
      
    }
    

    res.end();
}).listen(3001);

console.log("listen on port 3001")

