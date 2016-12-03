/**
 * Created by FRESHIELD on 2016/12/2.
 */

var domain = require('domain')
var eventEmitter = require('events').EventEmitter

var emitter = new eventEmitter()

var domain1 = domain.create()

domain1.on('error',function (err) {
	console.log('domain handle '+err.message)
})

domain1.add(emitter)

emitter.on('error',function (err) {
	console.log('emmitter handle '+err.message)
})

emitter.emit('error',new Error('need listener to handle'))

emitter.removeAllListeners('error')

emitter.emit('error',new Error('through domain1'))

var domain2 = domain.create()

domain2.on('error',function (err) {
	console.log('domain2 to handle '+err.message)
})

domain2.run(function () {
	var emitter2 = new eventEmitter()
	emitter2.emit('error',new Error('through domain2 to handle'))
	//emitter.emit('error',new Error('in domain2.run'))
})

domain1.remove(emitter)

emitter.emit('error',new Error('system crush'))

