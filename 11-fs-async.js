const {readFileSync, writeFileSync} = require('fs');

readFile('./content/first.txt','utf8', (err,result) => {
	if (err) {
	console.log(err)
	return
	}
	// console.log(result)
	// 출력: Hello this is first text file
	const first = result;
	readFile('./content/second.txt','utf8', (err,result) => {
		if (err) {
		console.log(err)
		return
		}
		const second = result
		writeFile(
			'./content/result-async.txt', 
			`Here is the result : ${first}, ${second}`
		,(err,result)=>{
		if(err){
			console.log(err)
			return;
		}
			console.log(result)
		})
	})
})
// 출력
// Here is the result : Hello this is first text file, Hello this is second text file