/**
 * Created by FRESHIELD on 2016/12/2.
 */

var path = require('path')

console.log('normalization '+path.normalize('/t/t1//2s/1s/tab/..'))
console.log('joint path '+path.join('/test','test1','tab','..'))
console.log('resolve '+path.resolve('path.js'))
console.log('ext name '+path.extname('path.js'))
