//write http s that uses through to write back
//the request stream as upper-cased data for POST

//require http
var http = require('http');

//require through

var through = require('through');


//create server
var server = http.createServer(function(req,res){

	//if req is POST
	if (req.method === 'POST'){
		//convert the request to upper case
		req.pipe(through(function(buf){
	this.queue(buf.toString().toUpperCase());
})).pipe(res);
		// res.end();

	} else 

	//else
	res.end('send me a POST!\n');

});


//listen to server on argv[2]
server.listen(parseInt(process.argv[2]));
