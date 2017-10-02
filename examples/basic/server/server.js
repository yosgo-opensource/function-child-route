const path = require('path')
const express = require('express')

const app = express()

console.log(path.resolve(__dirname, '../build/'))
app.use('/build', express.static(path.resolve(__dirname, '../build/')))

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head></head>
      <body>
        <div id='view'></div>
        <script src='/build/bundle.js'></script>
      </body>
    </html>
  `)
})

app.listen(8001, () => console.log('Server listen on port 8001'))
