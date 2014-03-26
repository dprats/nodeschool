var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){

	fs.readdir(dir, function(err, list_passed_from_fs){
		if (err) {
			return callback(err);
		}

		list_passed_filtered = list_passed_from_fs.filter(function (file){
			return path.extname(file) == '.' + ext;
		});

		callback(null, list_passed_filtered);
	});
}