var path= require('path');
var express = require('express');
var app = express();

//use middleware to plug-in stylus

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);