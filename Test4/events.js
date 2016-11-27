/**
 * Created by FRESHIELD on 2016/11/27.
 */

var events = require('events')

var eventEmitter = new events.EventEmitter()

eventEmitter.on('some_event', function () {

	console.log('some_event happen')

})

console.log('program begin')

setTimeout(function () {

	eventEmitter.emit('some_event')

}, 5000)

console.log('program end')