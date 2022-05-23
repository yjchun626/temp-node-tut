
/*
// npm init -y 입력 시 나오는 결과
{
	"name": "tutorial",
	"version": "1.0.0",
	"description": "",
	"main": "1-intro.js",
		
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "",
	"license": "ISC"
	"dependencies": {
		"bootstrap": "^4.6.0" // npm i bootstrap
		"lodash": "^4.17.20" // npm i lodash
	}
}
// node_modules라는 폴더가 만들어짐 - 하위: /lodash, /package-lock.json, || /bootstrap, /jquery
*/

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems) // [1, 2, 3, 4]