//your program will get html written to stdin
//convert all inner HTML to uppercase if class=LOUD

// var trumpet = require('trumpet');
// var through = require('through');
// var tr = trumpet();

// var loud_stream = tr.select('.loud').createStream();
// loud_stream.pipe(through (function (buf){
// 	this.queue(buf.toString().toUpperCase());
// 	})).pipe(loud_stream);

// process.stdin.pipe(tr).pipe(process.stdout);

 var trumpet = require('trumpet');
    var through = require('through');
    var tr = trumpet();
    
    var loud = tr.select('.loud').createStream();
    loud.pipe(through(function (buf) {
        this.queue(buf.toString().toUpperCase());
    })).pipe(loud);
    
    process.stdin.pipe(tr).pipe(process.stdout);