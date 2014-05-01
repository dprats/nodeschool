var level = require('level');

var db = level(process.argv[2]);

//store will contain 10 entries with keys in the form:
//	gibberishX
//	where 'x' is between (0,100)

//find those entries and print them out to the console,
//oredered by X, ascending.

function fetchNext(i){
	var key = 'gibberish' + i;
	db.get(key, function(err, data){
		if (err) {
			if(!err.notFound){
				throw err;
			}
		} else {
			console.log(key + '=' + data);
		}

		if (i <100){
			fetchNext(i +1);	
		}
	});
}

fetchNext(0);