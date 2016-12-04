/**
 * Created by FRESHIELD on 2016/12/3.
 */

var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/',function (req,res) {
	res.send('hello world')
})

var server = app.listen(8888,function () {
	var host = server.address().address
	var port = server.address().port

	console.log('test running at http://'+host+':'+port)
})
