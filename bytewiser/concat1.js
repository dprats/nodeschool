//write program, that combines all of the buffers
//from stdin and writes the single big buffer to
//the console

var buffers = [];
    
process.stdin.on('data', function(data) {

      var chunk = process.stdin.read();
      if (data!== null) {
        buffers.push(data);
      }
});
    
process.stdin.on('end', function() {
      console.log(Buffer.concat(buffers));
});