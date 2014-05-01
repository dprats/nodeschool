var level = require('level');
var db = level(process.argv[2]);



// //grab object

var obj = JSON.parse(process.argv[3]);

//for every property in the object, add each property into db
//where the key is the property.name

//iterate over every property
for (var key in obj){
	db.put(key, obj[key]);
}

// db.close();

// var level = require('level'),
//     db = level(process.argv[2]),
//     data = JSON.parse(process.argv[3]);

// for (var key in data) {
//   if (!data.hasOwnProperty(key)) return;
//   db.put(key, data[key], function(err) {
//     if (err) {
//       console.log("ERROR: %s", err);
//     }
//   })
// }