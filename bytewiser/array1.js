//1. take integer from process.argv[2]
//2. write it as the first element of Uint32Array
//3. create uint16Arrat from Array Buffer of the uint32
//4. log out to the console the JSON.s() version of uint16


var integer = parseInt(process.argv[2]);

var arr1 = new Uint32Array(1);
arr1[0] = integer;
var arr2 = new Uint16Array(arr1.buffer);

console.log(JSON.stringify(arr2));

