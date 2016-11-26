/**
 * Created by FRESHIELD on 2016/11/26.
 */

var fs = require('fs');

fs.readFile('input.txt', function (err, data) {

	if (err){
		console.log(err.stack);
		return;
	}

	console.log(data.toString());

});

console.log('program done');
