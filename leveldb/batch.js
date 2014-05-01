var fs = require('fs');
var level = require('level');

//read file and split into an array of lines
var data = fs.readFileSync(process.argv[3], 'utf8').split('\n');

// level(process.argv[2], function(err, db){

// 	if (err) throw err;

// 	//chained batched object
// 	var batch = db.batch();
// 	//for each line in the data object from file read...
// 	data.forEach(function(line){
// 		//create an array by splitting every line by a comma
// 		//every array should be [put,1,2] or [del,1]
// 		var d = line.split(',');
// 		//if the cmd is delete...
// 		if (d[0] == 'del'){
// 			//batch delete the item from DB the prop d[1]
// 			return batch.del(d[1]);
// 		}
// 		//..if not del...
// 		//db.batch().put(d1,d2).
// 		batch.put(d[1], d[2]);
// 	});
// 	batch.write();
// });

level(process.argv[2], function(err,db){

	// var batch =db.batch();

	var operations = data.map(function(line){

		var d = line.split(',');
		return {type:d[0], key:d[1], value:d[2]};

	});

	db.batch(operations, function(err){
		if (err) throw err;
		db.close();
	});

});

