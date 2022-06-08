var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    
    fs.readFile('person.json', function(err, content){
        response.write(content);
        response.end();
    });

}).listen(3001);

console.log("Listening on port 3001");