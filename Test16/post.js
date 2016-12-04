/**
 * Created by FRESHIELD on 2016/12/3.
 */

var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'))

app.get('/index2.html',function (req,res) {
	res.sendFile(__dirname+'/index2.html')
})

app.get('/',function (req,res) {
	res.sendFile(__dirname+'/index2.html')
})

app.post('/process_post',urlencodedParser,function (req,res) {


	var response = {
		first_name:req.body.first_name,
		last_name:req.body.last_name
	}

	console.log(response)
	res.end(JSON.stringify(response))
})

var server = app.listen(8888,function () {
	var host = server.address()
	console.log('test running on http://'+host)
})
