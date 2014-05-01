
//take stream from stdin
//buffer the text and reverse it using concat-stream
//output stream via stdout


//require concat
// var concat = require('concat-stream');
  var concat = require('concat-stream');

//write callback for when text is fully buffered

var ct = concat(function(buf){
	var s = buf.toString().split('').reverse().join('');
	console.log(s);
});


//pipe stdin to concat to stdout

// process.stdin.pipe(concat(function(buf){
// 	var s = buf.toString().split('').reverse().join('');
// 	console.log(s);
// }));

process.stdin.pipe(ct);