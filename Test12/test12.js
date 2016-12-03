/**
 * Created by FRESHIELD on 2016/12/2.
 */

var fs = require('fs')

fs.readFile('input.txt',function (err, data) {
	if (err){
		return console.error(err)
	}
	console.log('async read:'+data.toString())
})

var data = fs.readFileSync('input.txt')
console.log('sync read:'+data.toString())

console.log('program done')

console.log('prepare to open')
fs.open('input.txt','r+',function (err, data) {
	if (err){
		return console.error(err)
	}
	console.log('open success')
	console.log('lol',data.toString())
})

fs.stat('./input.txt',function (err, data) {
	if (err){
		return console.error(err)
	}
	console.log(data.isFile())
})

console.log('prepare to write file')
fs.writeFile('output.txt','i am the data to write',function (err) {
	if (err){
		return console.error(err)
	}
	console.log('success write')
	console.log('the data is')
	fs.readFile('output.txt',function (err,data) {
		if (err){
			return console.error(err)
		}
		console.log('writed data is:'+data.toString())
	})
})

console.log('through read file')
var buf = new Buffer(1024)

console.log('prepare to read')
fs.open('input.txt','r+',function (err,fd) {
	if (err){
		return console.error(err)
	}
	console.log('open success')
	fs.read(fd,buf,0,buf.length,0,function (err,bytes) {
		if (err){
			console.log(err)
		}
		console.log(bytes+' bytes reading')

		if (bytes > 0){
			console.log(buf.slice(0,bytes).toString())
		}

		fs.close(fd,function (err) {
			if (err){
				console.log(err)
			}
			console.log('close file success')
		})
	})

})