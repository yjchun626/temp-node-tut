// CommonJS, every file is module (by default)
// 노드의 모든 파일은 모듈이다.
// Modules - Encapsulated Code(캡슐화된 코드) (only share minimum - 우리가 원하는 최소한의 방법만 공유)

/* 이하 내용 4-names.js로 이동
const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'
*/

/* 이하 내용 5-utils.js로 이동
const sayHi = (name) => {
	console.log(`Hello there ${name}`)
}
*/

const names = require('./4-names')
const sayHi = require('./5-utils')

const data = require('./6-alternative-flavor')
console.log(data)
// 출력 
// { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

require('./7-mind-grenade')  
// 어디 할당하지 않고 그대로 모듈 사용하여 함수 실행
// 출력: the sum is : 15

sayHi('susan')
sayHi(names.john)  // 모듈 사용
sayHi(names.peter)

// 출력:
// Hello there susan
// Hello there john
// Hello there peter