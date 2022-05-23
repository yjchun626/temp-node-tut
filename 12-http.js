const http = require('http');

const server = http.createServer((req,res) => {
	if(req.url === '/'){
		res.end('Welcome to our homepage')
	}
	if(req.url === '/about'){
		res.end('Here is our short history')
	}
	res.end(`
	<h1>Oops!</h1>
	<p>We can't seem to find the page you are looking for</p>
	<a href="/">back home</a>	
	`)
})

server.listen(5000)
// localhost:5000
// localhost:5000/about 입력 시 req.url '/about'의 경우가 페이지로 출력됨
// localhost:5000/(존재하지 않는 아무 리소스 입력) - 에러 페이지 뜸