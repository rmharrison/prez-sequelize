const express = require('express')
const app = express()
const port = 3000

var {getPeople} = require('./controller')

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/people', (req, res) => {
  getPeople((err, rows) => {
    if (err) return res.status(500).end()
    return res.json(rows)
  }) 
})

app.listen(port, () => console.log(`listening on port ${port}!`))
