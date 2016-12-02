/**
 * Created by FRESHIELD on 2016/12/1.
 */

function lol() {
	var name
	this.setName = function (thyName) {
		name = thyName
	}

	this.sayHello = function () {
		console.log('hello ' + name)
	}

}

module.exports = lol
