var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname);
//writing middleware for the message
app.use(express.urlencoded());
//apply static middleware to serve index.html 
//without routes.

//calling static middleware
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));


// // app.get('/', function(req,res){

// // 	// res.send('Hello World!');
// // 	res.send('index');

// // });

// app.get('/home', function(req,res){

// 	// res.send('Hello World!');
// 	res.render('index', {date: new Date().toDateString() });

// });

// //route for /form
// app.post('/form', function(req,res){

// 	var input = req.body.str.split('').reverse().join('');
// 	res.end(input);

// });

app.listen(process.argv[2]);