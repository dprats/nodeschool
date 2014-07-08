
// Let's talk to two remote processes over HTTP being run by your friend
// and mine, "localhost"

// Port 7000: Faux session cache (redis or some such thing) 
// Port 7001: Faux database (mongo, level, postgres etc)

// As in the previous lesson, use the "q-io" module to create promises
// as wrappers for HTTP responses.  HINT: You will probably need more than
// one promise...

// 1. Send an HTTP GET request to the session cache on port 7000.  A JSON payload
//    will be returned to you containing a primary key called "id".  
// 2. Grab that id from the session response and send an HTTP GET request to 
//    your database on port 7001 to the url "localhost:70001/<id>".
// 3. If successfully done, your database will return a user object.  console.log 
//    it to win many nerd-points.

var HTTP = require('q-io/http');

var url1 = 'http://localhost:7000/';
var url2 = 'http://localhost:7001/';

HTTP.read(url1)
.then(function(id){
	return HTTP.read(url2+id);
})
.then(JSON.parse)
.then(console.log)
.then(null, console.error)
.done();