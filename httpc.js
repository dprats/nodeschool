//exercise7

var http = require('http');

http.get(process.argv[2], function (response) {
	response.setEncoding('utf-8');
	response.on('data', function(data){
		console.log(data);
	});
	response.on('error', function(){
		console.error;
	});
});

 // var http = require('http')
    
 //    http.get(process.argv[2], function (response) {
 //      response.setEncoding('utf8')
 //      response.on('data', console.log)
 //      response.on('error', console.error)
 //    })
