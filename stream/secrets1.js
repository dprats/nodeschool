//encrypted, gzipped file will be passed
//for each file passed in tar input, print 
// a hex-coded md5 hash + ' ' + \n
//argv2 = ciphername
//argv3 = passphrase

var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
// var unzip = zlib.createGunzip();
var through =require('through');


var parser = tar.Parse();
parser.on('entry', function(e){

	if (e.type !== 'File') return;
	//hash file
	
	//declare a hash stream
	var h = crypto.createHash('md5', {encoding: 'hex'});
	//pipe the entry object through hash
	e.pipe(h).pipe(through(null,end)).pipe(process.stdout);

	function end (){
		//once all the entry is complete, print filepath + \n
		this.queue(' ' + e.path +'\n');
	}
});

var cipher = process.argv[2];
var pw = process.argv[3];

// var decrypt = crypto.createDecipher(cipher, pw);


process.stdin.pipe(crypto.createDecipher(cipher, pw)).pipe(zlib.createGunzip()).pipe(parser);