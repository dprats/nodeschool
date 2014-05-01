//write browser code that uses websocket-stream module
//print hello\n

// //require websockets
// var ws = require('websocket-stream');

// //declare the websockets stream
// var stream = ws('ws://localhost:8000');

// //write hello to the stream
// stream.end('hello\n');


  var ws = require('websocket-stream');
    var stream = ws('ws://localhost:3000');
    stream.end('hello\n');