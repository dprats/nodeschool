//convert even-numbered lines to uppercase
//convert odd-numberes to lowercase

//require module for splitting
var split = require('split');
//require module for converting to lowercase or uppercase
var through = require('through');

var lines = 1;
//create stream for through, this stream converts
//to lowercase or uppercase


var tr = through(function(buf){

var line = buf.toString();

this.queue(lines % 2 === 0 ?
	line.toUpperCase() + '\n' :
	line.toLowerCase() +'\n');

lines++;

});

//

//pipe output to process.stdout

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);