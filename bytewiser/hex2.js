//answer should be a string of 2=character pairs
//also known as hexadecimal octets where each pair
//represents a single number in the array of bytes
//converted to hexadecimal

//when creating buffer object, you can pass array of bytes
//also referred to as octets and receive a new Buffer object
//that has available to it all the methods listed in 
//the official documentation

//create a buffer from process.argv

var sliced = process.argv.slice(2);
// console.log(sliced);

var buf = new Buffer(sliced);
console.log(buf.toString('hex'));

 var bytes = process.argv.slice(2).map(function(arg) { return parseInt(arg) })
    console.log(new Buffer(bytes).toString('hex'))