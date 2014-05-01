//convert even lines to uppercase

//use split module to split input by newlines

//capture input
//split it by newlines
//add the 
//convert 

var through = require('through');
//split takes all the input and separates by lines
var split = require('split');
var lineCount = 0;

//create stream with through
// this stream takes buffer object and converts to string
// every time a line is created, 
var tr = through( function(buf){
	var line = buf.toString();
	
	this.queue(lineCount % 2 === 0 ? 
		line.toLowerCase() + '\n' : 
		line.toUpperCase() +'\n');

	lineCount++;
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);