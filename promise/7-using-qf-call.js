//Use fcall to replace the entire parsePromised 
//function from the previous lesson.

var q = require('q');

// function parsePromised(arg){
// 	var def = q.defer();
// 	try {
// 		def.resolve(JSON.parse(arg));
// 	} catch(e){
// 		def.reject(e);
// 	}
// 	return def.promise;
// }

q.fcall(JSON.parse, process.argv[2])
.then(null, console.log);