//db with 2k tweets
//query this data for tweets that were made on a date

//each entry is a single tweet
//	key is exact time that tweet was sent
//	value is the content of the tweet

//create a module

//first argument to callback should be an Error if
//2nd arg should be array of of strings of tweet text
//array should be ordered for the single day
//one must not return tweets for any other day

module.exports = function(db, date, callback){

	//declare the tweets array
	var tweets = [];

	//connect to db and create a stream
	db.createReadStream({start: date, end: date +'xff'})
		.on('data', function(data){
			//as every tweet is read, add text to array
			tweets.push(data.value);

		})
		.on('error', function(err){
			//if there exists a callback..
			if (callback){
				callback(err);
				callback = null;
			}

		})
		.on('end', function(){

			//first arg should be null or error
			//2nd arg should be the tweets array
			callback(null,tweets);
			callback = null;

		});
}