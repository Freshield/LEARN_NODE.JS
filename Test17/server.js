/**
 * Created by FRESHIELD on 2016/12/3.
 */

var express = require('express')
var app = express()
var fs = require('fs')
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({extended:false})

function getJsonLenth(json) {
	var length = 0
	for (var item in json){
		length ++
	}
	return length
}

app.get('/listUsers',function (req,res) {
	fs.readFile(__dirname+'/users.json','utf8',function (err,data) {
		if (err){
			console.log(err)
		}else {
			var json = JSON.parse(data)
			console.log(getJsonLenth(json))
			res.end(data)
		}
	})
})

app.get('/',function (req,res) {
	res.sendFile(__dirname+'/index.html')
})

app.get('/findUser.html',function (req,res) {
	res.sendFile(__dirname+'/findUser.html')
})

app.get('/deleteUser.html',function (req,res) {
	res.sendFile(__dirname+'/deleteUser.html')
})


app.get('/addUser.html',function (req,res) {
	res.sendFile(__dirname+'/addUser.html')
})


app.get('/findUser',function (req,res) {
	fs.readFile(__dirname+'/users.json','utf8',function (err,data) {
		data = JSON.parse(data)
		var user = data["user"+req.query.id]
		if (user != undefined){
			console.log(user)
			res.end(JSON.stringify(user))
		}else {
			res.send('do not have this id')
		}
	})
})

app.get('/deleteUser',function (req,res) {
	fs.readFile(__dirname+'/users.json','utf8',function (err,data) {
		data = JSON.parse(data)
		var user = data["user"+req.query.id]
		if (user != undefined){
			console.log(user)
			delete data["user"+req.query.id]
			fs.writeFile(__dirname+'/users.json',JSON.stringify(data),function (err) {
				if (err){
					console.log(err)
				}else {
					console.log('delete success')
				}
			})
			res.end(JSON.stringify(data))
		}else {
			res.send('do not have this id')
		}
	})
})

app.post('/addUser',urlencodedParser,function (req,res) {
	var jsonLenght = 0
	//get the user number now
	var lines = fs.readFileSync(__dirname+'/users.json')

	var json = JSON.parse(lines)
	jsonLenght = getJsonLenth(json)

	var title = "user"+(jsonLenght+1)
	var user = {}
	user[title] = {}
	user[title].name = req.body.userName
	user[title].password = req.body.password
	user[title].profession = req.body.profession
	user[title].id = jsonLenght + 1

	fs.readFile(__dirname+'/users.json','utf8',function (err,data) {
		data = JSON.parse(data)
		data[title] = user[title]
		console.log(data)
		fs.writeFile(__dirname+'/users.json',JSON.stringify(data),function (err) {
			if (err){
				console.log(err)
			}else {
				console.log('change success')

			}
		})
		res.end(JSON.stringify(data))
	})

	console.log(user)


})


var server = app.listen(8888,function () {
	var host = server.address().address
	console.log('test running on http://'+host)
})
