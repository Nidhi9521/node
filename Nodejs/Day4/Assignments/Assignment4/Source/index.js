var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true).query;
    var content = q.upload;
    if (content == undefined) {
        res.write("Please enter the data")
    }
    else {
        fs.appendFile('person.txt', "\n"+content, (err) => {
            if (err) {
                console.log(err);
            }
        })

        res.write(`${content} is sucessfully added to file`)
    }

    res.end();
}).listen(3001);

console.log('Server running at port 3001');