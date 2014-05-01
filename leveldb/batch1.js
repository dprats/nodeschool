var fs = require('fs');
var level = require('level');


//1st arg is path to data store
//2nd arg is path to file

//store array of data from file
var data = fs.readFileSync(process.argv[3], 'utf8').split('\n');



//calling leveldb
level(process.argv[2], function(err,db){

	//array method

	//for each item in data, create an item
	//of operations
	var operations = data.map(function(line){

		//split each line by comma
		var op =	line.split(',');
		//add each item from op into an operations
		return {type:op[0], key:op[1], value:op[2]};

	});

	db.batch(operations, function(err){
		if (err) throw err;
		db.close();
	});


});