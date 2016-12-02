/**
 * Created by FRESHIELD on 2016/12/2.
 */

var util = require('util')

function Base() {
	this.name = 'base'
	this.base = 1991
	this.sayHello = function () {
		console.log('hello '+this.name)
	}

}

Base.prototype.showName = function () {
	console.log(this.name)
}

function Sub() {
	this.name = 'sub'
}

util.inherits(Sub,Base)
var objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)
var objSub = new Sub()
objSub.showName()
console.log(objSub)

function Person() {
	this.name = 'byvoid'
	this.toString = function () {
		return this.name
	}
}

var obj = new Person()
console.log(util.inspect(obj))
console.log(util.inspect(obj,true))

console.log(util.isArray([]))
console.log(util.isArray(new Array))
console.log(util.isArray({}))

console.log(util.isRegExp(/some regexp/))
console.log(util.isRegExp(new RegExp('another regexp')))

console.log(util.isDate(new Date()))



