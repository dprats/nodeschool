//This a module called by 6-modular.js as part of problem 6

var path = require('path');
var fs = require('fs');

// module.exports = function(dirname, ext, cb){

// 	fs.readdir(dirname,function(err,list){
// 		if (err) return cb(err);

// 		//filter the list of files by extension
// 		list = list.filter(function(item){
// 			return path.extname(item) == '.' + ext;
// 		});
// 		//for every item in the filtered list, callback
// 		return cb(null,list);
// 	});
// }

module.exports = function(dir,ext,cb){
	fs.readdir(dir, function(err, list){
		if (err) return cb(err);

		//filter the list by the extension name
		list = list.filter(function(file){
			return path.extname(file) == '.' + ext;
		});

		//callback once the readdir is complete
		cb(null, list);
	});
}