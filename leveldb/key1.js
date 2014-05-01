//prog that reads JSON file containing mappings of
//usernames to their GH repos and store them in a LevelUp
//data store such that they can be searched

//first argv = full path to the store
//2nd argv = path to a JSON file as the 2nd command
//	you can use 'require(process.argv[3)' to load
//	and parse into a JS object

//JSON file with 2 types of rows

//row 1
//{ type: user, name: maxogden}

//row 2
//{ type: repo, name: mux-demux, user: dominictarr}

//you must write all of the entries to the data store

//open the data store and write data to '!' as delimiter
//such that the verify script will be able to read the
//repos for each user by doing the following q:
//	db.createReadStream({start: rvagg!, end: rvagg!~})

//user data should be fetchable with:
//	db.get(rvagg, function(err, user){....})

var level = require('level');
var data = require(process.argv[3]);
var db = level(process.argv[2], {valueEncoding: 'json'});


var ops = data.map(function(row){

	var key;
	if (row.type === 'user'){
		key = row.name;
	} else {
		key = row.user + "!" + row.name;
	}
	return {type: 'put', key: key, value: row}

});

//batch all the operations to the DB
db.batch(ops);