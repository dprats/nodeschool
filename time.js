//ex 10


//should listen to TCP connections on first argument
//for each connection write the current date & time as:
// "YYYY-MM-DD hh:mm"

var net = require('net');
var port = parseInt(process.argv[2]);

var server = net.createServer( function(socket){
	var date = new Date();
	var formatted_date = date.getFullYear() +"-"+"0"+ (date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n";
	socket.end(formatted_date);
});

server.listen(port);

// official solution

  // var net = require('net')
    
  //   function zeroFill(i) {
  //     return (i < 10 ? '0' : '') + i
  //   }
    
  //   function now () {
  //     var d = new Date()
  //     return d.getFullYear() + '-'
  //       + zeroFill(d.getMonth() + 1) + '-'
  //       + zeroFill(d.getDate()) + ' '
  //       + zeroFill(d.getHours()) + ':'
  //       + zeroFill(d.getMinutes())
  //   }
    
  //   var server = net.createServer(function (socket) {
  //     socket.end(now() + '\n')
  //   })
    
  //   server.listen(Number(process.argv[2]))