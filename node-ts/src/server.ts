import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.end(`hello from node @ ${new Date().toString()}`)
})

server.listen(4000, () => console.log('http://localhost:4000/'))
