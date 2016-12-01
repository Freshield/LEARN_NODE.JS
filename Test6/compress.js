/**
 * Created by FRESHIELD on 2016/12/1.
 */

var fs = require('fs')
var zlib = require('zlib')

fs.createReadStream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'))

console.log('done zip')
