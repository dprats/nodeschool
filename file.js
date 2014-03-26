//Write an HTTP server that serves the same 
//text file for each request it receives.

//location of file is command-line

//use fs.createReadStream() method to 
//stream the file contents to the response.

var http = require('http');
var fs = require('fs');
var portNumber = parseInt(process.argv[2]);
var fileName = process.argv[3];

var server = http.createServer(function(req,res){

	res.writeHead(200, {'content-type': 'text/plain'});
	fs.createReadStream(fileName).pipe(res);
});

server.listen(portNumber);

// Official Solution
 // var http = require('http')
 //    var fs = require('fs')
    
 //    var server = http.createServer(function (req, res) {
 //      res.writeHead(200, { 'content-type': 'text/plain' })
    
 //      fs.createReadStream(process.argv[3]).pipe(res)
 //    })
    
 //    server.listen(Number(process.argv[2]))