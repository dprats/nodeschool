var express = require('express');
var app = express();
var fs = require('fs');

var filePath = process.argv[3];

app.get('/books', function(req,res){
	//read the file
	fs.readFile(filePath, function(e, data){

		if (e) return res.send(500);
		
		try {
			books = JSON.parse(data);
		} catch(e) {
			res.send(500);
		}

		res.json(books);

	});
});

app.listen(process.argv[2]);