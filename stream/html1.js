//program will get html written to stdin
//convert all inner html with class "loud" to upper-case
//use trumpet to select the inner HTML

//declare trumpet
var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();
//loud stream

var loud= tr.select('.loud').createStream();

loud.pipe(through(function(buf){
	this.queue(buf.toString().toUpperCase());
})).pipe(loud);

//NOTE THAT I PASSED TR AS STREAM
process.stdin.pipe(tr).pipe(process.stdout);