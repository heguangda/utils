let http = require('http')
let cook = require('cookie')
let cok = cook.parse('foo', 'bar')
console.log(cok)

let server = http.createServer(function(req,res){
  let cookies = req.headers.cookie
  console.log(req.cookie)
  res.writeHead(200,{
  'Set-Cookie':'mycookie=11145966',
  })
  res.end('hello world')
})

server.listen(9527)