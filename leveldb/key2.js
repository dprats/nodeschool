var level = require('level');

//argv2 = path to store
//argv3 = path to JSON file

var db = level(process.argv[2], {valueEncoding: 'json'});
var data = require(process.argv[3]);

//create an array of operations
//every row from data is ONE json object

var ops = data.map(function(row){

	var key
	if(row.type == 'user'){
		key = row.name;
	} else if (row.type == 'repo'){
		//this makes all the keys be of form user!repo
		key = row.user + "!" + row.name;
	}
	//we return the operation we want the db to batch
	return {type: 'put', key: key, value: row}

});

//batch all the operations and write them to db
//so we can query the repos by ranges

db.batch(ops);