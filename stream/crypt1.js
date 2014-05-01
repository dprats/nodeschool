//your module will be given a passphrase on argv2
//aes256 encrypted data will be written to stdin

//decrypt the data and stream the result to process.stdout

//require crypto
var crypto = require('crypto');

var decrypted_stream = crypto.createDecipher('aes256', process.argv[2]);
process.stdin.pipe(decrypted_stream).pipe(process.stdout);