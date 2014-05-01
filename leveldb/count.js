//given: data set with > 2K tweets from @horse_js
// job is to query this data and return number of tweets
// that occur from a given date to end of data set

//each entry is a single tweet
//the key is the exact time that the tweet was sent
// the value of the entry is simply a string representing
//the tweet's content

//write module (not program) that exports a single function
//that accepts: 
//	a) instance of level DB 
//	b) date string
//	c) callback function
//first arg to callback should be an error if err or null
//second arg to CB should be integer, representing number
// of tweets since that date.

//use CreateReadStream
//restrict the range of entries to just data one needs

module.exports = function(db, date, callback){

	var tweets = 0;
	// var level = require('level');
	db.createReadStream({ start: date})
	.on('data', function(data){
	// 	// if (err) return console.error(err);
		 tweets++;
	})
	.on('error', function(err){
		if (callback) {
			callbackb(err);
			callback = null;
		}
	})
	.on('end', function(){
			if (callback) {
				callback(null, tweets);
				callback = null;
			} 
	});
}



