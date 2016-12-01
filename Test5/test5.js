/**
 * Created by FRESHIELD on 2016/12/1.
 */

var buf = new Buffer(10)

var buf1 = new Buffer([10,20,30,40,50])

var buf2 = new Buffer('test buffer','UTF-8')



var testBuf = new Buffer(256)
len = testBuf.write('test buffer')

console.log('write in bytes: ' + len)

buf = new Buffer(26)

for (var i = 0; i < 26; i++){
	buf[i] = i + 97
}

console.log(buf.toString('ascii'))
console.log(buf.toString('ascii',0,5))
console.log(buf.toString('utf8',0,5))
console.log(buf.toString(undefined,0,5))
console.log(buf.toString())

buf = new Buffer('test buffer')
var json = buf.toJSON(buf)

console.log(json)

var words = new Buffer(json)
console.log(words.toString())

buf1 = new Buffer(' buffer1 ')
buf2 = new Buffer(' buffer2 ')
var buf3 = Buffer.concat([buf1,buf2])
console.log('buffer3 is ' + buf3.toString())

buf1 = new Buffer('abc')
buf2 = new Buffer(3)

buf1.copy(buf2)
console.log(buf2.toString())

buf1 = new Buffer('buffer1')
buf2 = buf1.slice(0,2)
console.log(buf2.toString())

console.log(buf1.length)

buf2 = new Buffer(256)
console.log(buf2.length)
buf2.write('buffer2')
console.log(buf2.length)
console.log(buf2.toString())
console.log(buf2.toJSON())
console.log((new Buffer(buf2.toJSON())).length)