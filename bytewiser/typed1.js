
// //read stdin for data, once data hits...
// process.stdin.once('data', function(buff) {
// 	// ..create typed array length the size of the buffer
//   var ui8 = new Uint8Array(buff.length)
//   //iterate through length of buffer...
//   for (var i = 0; i < buff.length; i++)
//   	//... insert element i of buffer into index i of ui8 
//   	ui8[i] = buff[i]
//   //console the typed array as a JSON string
//   console.log(JSON.stringify(ui8))
// })

//read stdin
process.stdin.on('data', function(buff){

	//declare the uint8 with correct length
	var arr = new Uint8Array(buff.length);

	//copy buffer into array
	for (var i = 0; i < buff.length; i++){
		arr[i] = buff[i];
	}
	//console the array
	console.log(JSON.stringify(arr));

});