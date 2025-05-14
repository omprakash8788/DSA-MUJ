
import { createServer } from 'node:http'

const server = createServer((req, res)=>{
  // console.log(typeof req)
  res.statusCode=200;
  res.setHeader('Content-type', 'text/plain')
  res.end("Hello HTTP world")
})

const host ='localhost';
const port = 5000;

server.listen(port, host,()=>{
  console.log(`Server listening on http://${host}:${port}`)
})