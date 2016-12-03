/**
 * Created by FRESHIELD on 2016/12/2.
 */

var dns = require('dns')

dns.lookup('www.github.com',function onLoopup(err,address,family) {
	console.log('ip address: ',address)
	dns.reverse(address,function (err,hostnames) {
		if (err){
			console.log(err.stack)
		}

		console.log('reverse find '+address+':'+JSON.stringify(hostnames))
	})
})
