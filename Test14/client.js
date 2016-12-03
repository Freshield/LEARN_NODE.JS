/**
 * Created by FRESHIELD on 2016/12/2.
 */

var net = require('net')
var client = net.connect({port:8888},function () {
	console.log('connect to the server')
})

client.on('data',function (data) {
	console.log(data.toString())
	client.end()
})

client.on('end',function () {
	console.log('the client end')
})
