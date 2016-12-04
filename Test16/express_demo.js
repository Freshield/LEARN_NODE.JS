/**
 * Created by FRESHIELD on 2016/12/3.
 */

var express = require('express')
var app = express()

app.get('/',function (req,res) {
	res.send('hello world')
	console.log(req.originalUrl)
})

var server = app.listen(8888,function () {

	var host = server.address().address
	var port = server.address().port

	console.log('test address is http://%s:%s',host,port)
})
