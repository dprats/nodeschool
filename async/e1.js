//create a program that will receive 2 URLs as the first
//and second p.a 
//1. using http.get create two GET requests to these URLs
//2.console the errors

var async = require('async')
var	http = require('http');

async.each(process.argv.slice(2),
	//function to apply on each item 
	function(item, done){
		//opts for the request
		http.get(item, function(res){

			res.on('data',function(){

			});

			res.on('end', function(){
				return done(null);
			});
		}).on('error', function(err){
			done(err);
		});
	}, 
	function(err){
		if (err) console.log(err);
	});