/**
 * Created by FRESHIELD on 2016/12/1.
 */

var fs = require('fs')

var readerStream = fs.createReadStream('input.txt')

var writerStream = fs.createWriteStream('pipe.txt')

readerStream.pipe(writerStream)

console.log('program done')
