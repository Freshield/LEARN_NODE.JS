/**
 * Created by FRESHIELD on 2016/12/3.
 */

var express = require('express')
var app = express()

app.get('/',function (req,res) {
	console.log('homepage get request')
	res.send('hello get')
})

app.post('/',function (req,res) {
	console.log('home post request')
	res.send('hello post')
})

app.get('/del_user',function (req,res) {
	console.log('/del_user response delete request')
	res.send('delete page')
})

app.get('/list_user',function (req,res) {
	console.log('/list_user get request')
	res.send('user list page')
})

app.get('/ab*cd',function (req,res) {
	console.log('/ab*cd get request')
	res.send('regix test')
})

var server = app.listen(8888,function () {
	var host = server.address().address
	var port = server.address().address

	console.log('test running on http://%s:%s',host,port)
})
