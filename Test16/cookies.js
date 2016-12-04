/**
 * Created by FRESHIELD on 2016/12/3.
 */

var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/',function (req,res) {
	console.log('Cookies: ',req.cookies)
	res.send('get cookie')
})

app.listen(8888)
