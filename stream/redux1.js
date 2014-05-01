//counter will be a readable stream given as argv2

var duplexer = require('duplexer');
var through = require('through');

module.exports = function(counter){


	var counts ={};

	var input = through(write, end);

	return duplexer(input, counter);

	//return duplex stream to capture countries
	//on the writable side and pass through 'counter'
	//on readable side

	function write(row){
		counts[row.country] = (counts[row.country] || 0) +1;
		//counts[MX] = (counts[Mexico] || 0) + 1;
		console.log("counts[row.country] is " + counts[row.country]);
		console.log("row country is " + row.country);
	}
	function end(){ 
		counter.setCounts(counts);
	}


};

   // var duplexer = require('duplexer');
   //  var through = require('through');
    
    // module.exports = function (counter) {
    //     var counts = {};
    //     var input = through(write, end);
    //     return duplexer(input, counter);
        
    //     function write (row) {
    //         counts[row.country] = (counts[row.country] || 0) + 1;
    //     }
    //     function end () { counter.setCounts(counts) }
    // };