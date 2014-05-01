//print all key/value pairs in a levelDB store
//location of store is first argument
//each entry should be printed on a new line to stdout

//key=value

//since you do not know the key names, you cannot use .get


// db.createReadStream().on('data', function(data){
// 	//data.key and data.value
// });

// var fs = require('fs');


var level = require('level');
var db = level(process.argv[2]);

db.createReadStream().on('data', function(data){												
												console.log(data.key+'='+data.value);
											});
