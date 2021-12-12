console.log("Hello from nodejs server app");
const http=require('http');
console.log(http);
const { bufferToggle } = require("rxjs");

const server = http.createServer((req,res)=>
{
  res.end("Hello from nodejs server")
})
;

server.listen(3000);

