const http = require('http')
const crypto = require('crypto')
const utils = require('./utils')

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
  })
  .listen(3030)

server.on('upgrade', (req, socket, head) => {
  const guid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
  const key = req.headers['sec-websocket-key']
  const sha1 = crypto.createHash('sha1')
  const hashed = sha1.update(`${key}${guid}`).digest('base64')

  const header = [
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    'Sec-WebSocket-Accept: ' + hashed,
  ]
  const protocol = req.headers['sec-websocket-protocol']
  if (protocol) header.push(`Sec-WebSocket-Protocol: ${protocol}`)

  socket.setNoDelay(true)
  socket.write(header.concat('', '').join('\r\n'))

  socket.on('data', (buffer) => {
    const data = utils.decodeFrame(buffer)
    const payloadData = data.payloadData ? data.payloadData.toString() : ''

    if (data.opcode === 8) {
      socket.end()
    } else {
      console.log(payloadData) // 发送的文本内容
    }
  })

  socket.on('end', () => {
    console.log('连接断开')
  })
})
