//Problem 9
//three URLs will be provided

//1. collect the complete content provided to you by each URL
//2. print the content of each url to stdout, one line per URL
//3. print them in the same order as the URLs are provided

//SOLUTION
var http = require('http');
var concat = require('concat-stream');

var urls = process.argv.slice(2); //create array of urls
var contents =[]; //array with three empty strings
var count =0;

function httpGet(i){

	//make an HTTP get request for URL index i
	http.get(urls[i],function(res){
		//pipe the contents of a URL
		res.pipe(concat(function(data){
			//place contents in corresponding entry in array
			contents[i] = data.toString();
			count++; //this variable keeps track of files finished

			//if this is the third completed file,
			//then run console.log on each element of contents
			if (count ==3){
				//print all three in order
				contents.forEach(function(str){
					console.log(str);
				});
			}

		}));
	});
}

for (var j =0; j < 3; j++){
	httpGet(j);
}


