/**
 * Created by FRESHIELD on 2016/12/1.
 */

var fs = require('fs')

var data = ''

var readerStream = fs.createReadStream('input.txt')

readerStream.on('data',function (chunk) {
	console.log('here is data')
	data += chunk
	console.log(data)
})

readerStream.on('end',function () {
	console.log('here is end')
	console.log(data)
})

readerStream.on('error',function (err) {
	console.log('here is error')
	console.log(err.stack)
})

readerStream.on('finish',function () {
	console.log('here is finish')
})

console.log('program done')