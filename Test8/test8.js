/**
 * Created by FRESHIELD on 2016/12/1.
 */

function say(word) {
	console.log(word)
}

function execute(someFunction, value) {
	someFunction(value)
}

execute(say, 'hello')

execute(function (word) {
	console.log(word)
},'some function')

var http = require('http')

function onRequest(request, response) {
	response.writeHead(200,{'Content-Type':'text/plain'})
	response.write('hello world')
	response.end()
}

http.createServer(onRequest).listen(8888)