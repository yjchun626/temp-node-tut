// local(지역 변수)
const secret = 'SUPER SECRET'
// share(모든 곳에서 사용 가능하도록 공유...)
const john = 'john'
const peter = 'peter'

module.exports = { john, peter }

// console.log(module)
// 모듈 정보 확인 가능: exports 주목 - 내보내는 객체