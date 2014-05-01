//create an express app that runs on local:3000
//1. outputs "hello world" when someone goes to /home
//2. process.a[2] will be provided by ES to you 

var express = require('express');
var app = express();

app.get('/home', function(req,res){
	res.end('Hello World!');
});

app.listen(parseInt(process.argv[2]));
