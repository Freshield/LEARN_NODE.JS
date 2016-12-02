/**
 * Created by FRESHIELD on 2016/12/1.
 */

var hello = require('./hello')

hello.world()

var Lol = require('./lol')
var lol = new Lol()
lol.setName('yy')
lol.sayHello()