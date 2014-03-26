//require fs
var fs = require('fs');

//grab file from stdout
var dir = process.argv[2];

//grab extension to filter from stdout
var extension = "." + process.argv[3];


//read file
fs.readdir(dir, function(err, list){
	if (err) throw err;
	//if a file has a certain extension, it gets added to list
	for (var i =0; i < list.length; i++){
		if (list[i].indexOf(extension) !== -1){
			console.log(list[i]);
		}
	}
});


// VERSION RECCOMMENDED

// var fs = require('fs')
//     var path = require('path')
    
//     fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//           console.log(file)
//       })
//     })


