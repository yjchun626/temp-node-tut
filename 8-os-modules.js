const os = require('os')  
// 내장된 모듈이라 ./ 필요 없음

//os.(...) 
// .을 통해 각 메소드 확인 가능

// info about current user
const user = os.userInfo()
console.log(user)  // 각 정보 디렉토리로 제공

// method returns the system uptime in seconds - 시스템 업타임(초) 리턴함
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
	name: os.type(), // 이름
	release: os.release(), // 릴리스
	totalMem: os.totalmem(), // 총 메모리
	freeMem: os.freemem(), // 여유 메모리
}
console.log(currentOS)

/*
실행 시 출력되는 내용:

{
  uid: -1,
  gid: -1,
  username: '1',
  homedir: 'C:\\Users\\1',
  shell: null
}
The System Uptime is 276296 seconds
{
  name: 'Windows_NT',
  release: '10.0.19043',
  totalMem: 16751259648,
  freeMem: 8036724736
}

*/