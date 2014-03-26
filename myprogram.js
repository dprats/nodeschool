//create a variable to hold the sum
var sum =0;

//loop through the array and add to the sum
for (var i = 2; i < process.argv.length; i++ ){

	// console.log('sum is ' + sum);
	// console.log('process.argv is ' + process.argv[i]);
	sum = sum + Number(process.argv[i]);

}

//print the sum
console.log(sum);
