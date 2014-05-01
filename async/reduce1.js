//write program that:
//1. receive URL as pa{2}
//2. to this URL send a GET request using http.get
//	with query parameter named 'number' which should
//	be set consecutively to one of the values in the
//	following array:
//['one', 'two', 'three']
//4. convert the response body to a Number and
//	and add it to previous value
//console.log the reduced value

//async.reduce(arr, memo, iterator, callback)
//	- reduces arr into a single value using iterator
//	- memo is the initial state of the reduction

var async = require('async');
var http = require('http');

var url = process.argv[2];

var arr = ['one', 'two', 'three'];

async.reduce(arr,0, function(memo, item, callback){

							var body =  '';
							// add the item as a query to url
							http.get(url +'?number=' + item, function(res){
								// console.log('calling httpGet with number=' +number);
								res.on('data', function(chunk){
									body += chunk.toString();
								});

								res.on('end', function(){
									callback(null, memo + Number(body));
								});

							}).on('error', callback);

						}, function(err, result){
							if (err) return console.log(err);
							console.log(result);
							}
						);