//first arg returned on cb should be an ERROR if err/null
//send arg on cb should be tweets


module.exports = function(db, date, callback){

	var tweets = 0;

	db.createReadStream()
	.on('data', function(data){
	
		tweets++;
	})
	.on('error', function(){
		if (callback){
			callback(err);
			callback = null;
		}

	})
	.on('end'), function(){
		callback(null, tweets);
		callback = null;
	});

}