/**
 * Created by FRESHIELD on 2016/11/30.
 */

var fs = require('fs')

fs.readFile('input.txt',function (err,data) {

	if (err) return console.error(err);

	console.log(data.toString());

});

console.log('program end');
