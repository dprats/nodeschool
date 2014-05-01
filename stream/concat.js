var concat = require('concat-stream');

function reverse_text(text){
	return text.toString().split('').reverse().join('');

}

process.stdin.pipe(
		concat(function(body){
			var reversed = reverse_text(body);
			process.stdout.write(reversed + '\n');
}));


//official solution

  // var concat = require('concat-stream');
    
  //   process.stdin.pipe(concat(function (src) {
  //       var s = src.toString().split('').reverse().join('');
  //       console.log(s);
  //   }));
