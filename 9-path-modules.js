const path = require('path')

console.log(path.sep) 
// 플랫폼 별 구분 기호 사용

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

// 출력: 
// /content/subfolder/test.txt

const base = path.basename(filePath)
console.log(base)

// 출력: 
// test txt

// 때때로 절대경로 사용해야 할 때가 있다
// __dirname -> 현재 app.js가 있는 디렉토리 가리킴
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute)

// 출력:
// C:\Users\1\nodeTutorial\content\subfolder\test.txt