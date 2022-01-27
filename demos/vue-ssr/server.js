const server = require('express')()
const fs = require('fs')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.template.html', 'utf-8')
})
const createApp = require('./dist/build-server-bundle.js')


server.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf8')
  const context = { url: req.url, title: 'Vue-ssr测试' }
  createApp(context).then(app => {
    renderer.renderToString(app, context).then(html => {
      res.end(html)
    }).catch(err => {
      res.status(500).end(`Internal server Error: ${err}`)
    })
  })
})

server.listen(8080, () => {
  console.log('server running at port 8080')
})