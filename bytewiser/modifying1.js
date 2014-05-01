//write program that takes first buffer written to p.stdin
//update all "." with "!" and logs out the updated
//buffer object


//take the data from process to stdin,
//as a data event is triggered, callback
process.stdin.on('data', function(buff) {
	//for every buff that gets passed, iterate

  for (var i = 0; i < buff.length; i++) {
  	//if biff[i] is equal to 46, then replace buf[i] with '!'
    if (buff[i] === 0x2e) buff[i] = 0x21;
  }
	//once all of the data is passed AND
	//all the buffer is converted
  console.log(buff)
})