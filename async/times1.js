//1.you will receive 2 p.a. with host and port
//2. use http.request to send POST to url + 'users/create'
//	with body containing JSON.stringify'd object:
//	{user_id: 1}
//3. do this 5 times with each user_id property being
//	incremented and starting at 1
//4. once these requests are done, send a GET request to:
//	url + '/users'
//5. console.log the response body

var http = require('http');
var qs = require('querystring');
var async = require('async');
var hostname = process.argv[2];
var port = process.argv[3];
var url = 'http://' +hostname +':' + port;


// async.series(tasks, callback)
async.series([
	//functions in tasks array
	function(done){
		//declaring function to add user via POST
		function _addUser(user_id, cb){

			var postdata = JSON.stringify({'user_id': user_id});

			var opts = {
				hostname: hostname,
				port: port,
				path: '/users/create',
				method: 'POST',
				headers: {
					'Content-Length': postdata.length
				}
			};

			// make HTTP post request using opts
			var req = http.request(opts, function(res){
				res.on('data', function(chunk){});

				res.on('end', function(){
					cb();
				});

			});

			req.on('error', cb);

			//write the ({'user_id': user_id}); via post
			req.write(postdata);

			//end connection
			req.end();

			}
// 			//perform the following adding of users 5 times

			async.times(5, function(n, next){
				//_addUser(increments)
					_addUser(++n, function(err){
					next(err);
					});
				}, function(err){
					if (err) return done(err);
					done(null, 'saved');
				});

		},

		function(done){

			http.get(url + '/users', function(res){
				var body ="";
				res.on('data', function(chunk){
					body += chunk.toString();
				});

				res.on('end', function(){
					done(null, body);
				});

			}).on('error', done);

		}
], 
function(err, result){
	if(err) return console.log(err);
	console.log(result);
});


// async.series([
//         function(done){
//           function _addUser(user_id, cb){
    
            // var postdata = JSON.stringify({'user_id': user_id}),
            // opts = {
            //   hostname: hostname,
            //   port: port,
            //   path: '/users/create',
            //   method: 'POST',
            //   headers: {
            //     'Content-Length': postdata.length
            //   }
            // };
    
          //   var req = http.request(opts, function(res){
          //     res.on('data', function(chunk){})
    
          //     res.on('end', function(){
          //       cb();
          //     }); 
          //   });
    
          //   req.on('error', cb);
    
          //   req.write(postdata);
          //   req.end();
          // }
    
        //   async.times(5, function(n, next){
        //     _addUser(++n, function(err){
        //       next(err);
        //     });
        //   }, function(err){
        //     if (err) return done(err);
        //     done(null, 'saved');
        //   });
        // },
    
        // function(done){
        //   http.get(url + '/users', function(res){
        //     var body = "";
        //     res.on('data', function(chunk){
        //       body += chunk.toString();
        //     });
    
        //     res.on('end', function(){
        //       done(null, body);
        //     });
        //   }).on('error', done);
        // }
    
      // ], function(err, result){
      //   if (err) return console.log(err);
      //   console.log(result);
      // });
