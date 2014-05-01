//argument from process.argv[2] will be path

//read this file and split it by newlines (\n)
//you should log one buffer per line

var fs = require('fs');


//return the contents of the file name
var file = fs.readFileSync(process.argv[2]);

var offset = 0;
//read every byte in the content
for (var i =0; i < file.length; i++){
	//if a character has ASCII integer 10...
	if (file[i] === 10){
		//...print
		console.log(file.slice(offset, i));
		i++;
		offset = i;
	}
}

console.log(file.slice(offset, i));