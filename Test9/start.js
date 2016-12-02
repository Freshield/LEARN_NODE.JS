/**
 * Created by FRESHIELD on 2016/12/1.
 */


var http = require('http')
var url = require('url')

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname
		console.log('request for ' + pathname + ' received')

		route(pathname)

		response.writeHead(200,{'Content-Type':'text/plain'})
		response.write('hello world')
		response.end()
	}

	http.createServer(onRequest).listen(8888)
	console.log('server start on http://127.0.0.1:8888')

}

exports.start = start

