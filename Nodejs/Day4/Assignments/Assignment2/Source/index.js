var http = require('http');
var url = require('url');


http.createServer(function(req,res){
    var myUrl = "http://localhost:3001/product?param1=5&param2=10"
    var q = url.parse(myUrl, true).query;
    var a = Number(q.param1);
    var b = Number(q.param2);
    var ans = a + b ;
    res.write(`${a} and ${b} summation is ${ans}`);
    res.end();
}).listen(3001);

console.log("listen on port 3001")