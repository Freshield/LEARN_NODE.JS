/**
 * Created by FRESHIELD on 2016/12/1.
 */

var server = require('./start')
var router = require('./route')

server.start(router.route)
