/**
 * Created by FRESHIELD on 2016/12/2.
 */

console.log(__filename)

console.log(__dirname)

function printHello() {
	console.log("hello,world")
}

var t = setTimeout(printHello,2000)

clearTimeout(t)

var i = setInterval(printHello,2000)

clearInterval(i)

console.log('byvoid%diovyb',1991)

//console.trace()

console.log('program begin')

var counter = 10

console.log('count: %d',counter)

console.time('get data')

console.timeEnd('get data')

console.info('program end')

process.on('exit',function (code) {

	setTimeout(function () {
		console.log('not running')
	},0)

	console.log('end code:', code)

})

console.log('program end')

process.stdout.write('hello world!\n')

process.argv.forEach(function (val,index,array) {
	console.log(index+':'+val)
})

console.log(process.execPath)

console.log(process.platform)

console.log('the dir now:'+process.cwd())

console.log('the version now:'+ process.version)

console.log(process.memoryUsage())


