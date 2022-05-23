// GLOBALS - NO WINDOW!!

// 1. __dirname 
// path to current directory

// 2. __filename 
// file name

// 3. require 
// function to use modules(CommonJs)

// 4. module 
// info about current module(file)

// 5. process 
// info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
	console.log('hello world')
}, 1000)

// 강제 종료: ctrl + C
// 화살표 위(↑) 키: 이전 명령으로 돌아가기
// clear: 터미널의 모든 기록 지우기