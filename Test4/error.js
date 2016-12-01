/**
 * Created by FRESHIELD on 2016/12/1.
 */

var events = require('events')

var emitter = new events.EventEmitter()

emitter.emit('error')
