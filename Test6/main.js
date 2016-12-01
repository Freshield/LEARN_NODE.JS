/**
 * Created by FRESHIELD on 2016/12/1.
 */

var fs = require('fs')
var data = 'test stream'

var writerStream = fs.createWriteStream('output.txt')

writerStream.write(data,'utf8')

writerStream.end()

writerStream.on('finish',function () {
	console.log('write done')
})

writerStream.on('error',function (err) {
	console.log(err.stack)
})

writerStream.on('data',function (chunk) {
	console.log(chunk)
})

writerStream.on('end',function () {
	console.log('here is end')
})

console.log('program done')
