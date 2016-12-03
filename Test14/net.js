/**
 * Created by FRESHIELD on 2016/12/2.
 */

var net = require('net')
var server = net.createServer(function (connect) {
	console.log('client connected')
	connect.on('end',function () {
		console.log('client close')
	})
	console.log(net.Socket.remoteAddress)
	console.log(net.Socket.localAddress)

	connect.write('hello world\n')
	//connect.pipe(connect)
})

server.listen(8888, function () {
	console.log('server is listening')
})
