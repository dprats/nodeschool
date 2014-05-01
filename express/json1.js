// var path = require('path');
// var express = require('express');
// //need fs to read a file
// var fs = require('fs');
// var app = espress();



//write server that reads a file: p.a.[3]
//1. parses to JSON
//2. outputs content to user with res.json(object)
//everything should match to books resource

// var filePath = process.argv[3];

// app.get('/books', function(req,res){

// 	fs.readFile(process.argv[3], function(err, data){

// 		if (err) return res.send(500);
// 		res.json(JSON.parse(data));

// 	});

// });

// app.listen(process.argv[2]);
var path = require('path')
var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.send(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.send(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])