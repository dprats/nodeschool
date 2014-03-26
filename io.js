var fs = require('fs');

//capture 

//put contents of file into a string

var contents = fs.readFileSync(process.argv[2]).toString();

//break contents into array with /n as delimiter
var array = contents.split('\n');

//count number of items in array

var newlines = array.length;
newlines--;

//print number of newlines

console.log(newlines);