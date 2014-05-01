//write mod that stores valid 2,3,4 character
//scrabble words and is able to retruieve them
//according to basic prefix-queries

//mod should export an 'init()' function that accepts
//3 args:
//	db object for empty DB
//	array of 2,3 and 4 char words
//  callback after initializing DB

//mod should export a query method that accepts:
//	DB object, same initialized with init
//	'word' string containing the query
//	callback taht you must call

module.exports.init = function(db, arr, callback){
	//insert each word in the arr here
	//call 'callback()' when you are done inserting
	var ops = arr.map(function(word){
		var key = word.length + '!'+ word;
		return {type: 'put', key: key, value: word}
	});
	db.batch(ops, callback);
}

module.exports.query = function(db, word, callback){

	var words =[];
	var key = word.length + '!'+ word.replace(/\*/g, '');
	db.createReadStream( {start: key, end: key +'\xff'})
		.on('data', function(data){
			//add every word found to the array
			words.push(data.value);
		})
		.on('error', function(err){
			if (callback){
				callback(err);
			}
		})
		.on('end', function(){
			if (callback){
				//callback on the finished words array
				callback(null, words);
			}
			callback = null;
		});
}