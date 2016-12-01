/**
 * Created by FRESHIELD on 2016/12/1.
 */

var events = require('events')

var eventEmitter = new events.EventEmitter()

var listener1 = function listener1() {

	console.log('listener1 doing')

}

var listener2 = function listener2() {

	console.log('listener2 doing')

}

eventEmitter.addListener('connection',listener1)

eventEmitter.on('connection',listener2)

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection')
console.log(eventListeners + " listeners events")

eventEmitter.emit('connection')

eventEmitter.removeListener('connection',listener1)
console.log('listener1 not listen')

eventEmitter.emit('connection')

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection')
console.log(eventListeners + " listeners events")

console.log('program done')

