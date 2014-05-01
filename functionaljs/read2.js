//this is from 
//https://github.com/substack/stream-handbook

var Readable = require('stream').Readable;
var rs = Readable();

var c = 97 - 1;

rs._read = function () {
    if (c >= 'z'.charCodeAt(0)) return rs.push(null);
    
    setTimeout(function () {
    		// console.log('pushing char ' + (c+1) + '/' + String.fromCharCode(c+1) +'\n');
        rs.push(String.fromCharCode(++c));
    }, 1000);
};

rs.pipe(process.stdout);

process.on('exit', function () {
    console.error('\n_read() called ' + (c - 97) + ' times');
});
process.stdout.on('error', process.exit);