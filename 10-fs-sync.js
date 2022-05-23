const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(fisrt, second)
// 출력:
// Hello this is first text file Hello this is second text file

writeFileSync(
	('./content/result-sync.txt'), 
	`Here is the result : ${first}, ${second}`,
	{ flag : 'a' }  
    // 해당 플래그 추가 시 새로운 값(새로운 줄) 만들어짐
)
// content의 하위 파일로 "result-sync.txt" 생성됨
// 내용: 
// Here is the result : Hello this is first text file, Hello this is second text file