var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter){

	var counts = {};
	var input = through(write, end);
	return  duplexer(input, counter);

	function write (row){
		counts[row.country] = (counts[row.country] || 0) +1;
		console.log("row.country is " + counts[row.country]);
	}
	function end (){
		console.log('calling setCounts...');
		counter.setCounts(counts);
		// console.log('final count is '+ counter.setCounts(counts));
	}

};