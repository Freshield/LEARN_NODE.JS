/**
 * Created by FRESHIELD on 2016/12/1.
 */

var fs = require('fs')
var zlib = require('zlib')

fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('decompress.txt'))

console.log('done decompress')
