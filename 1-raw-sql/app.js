const express = require('express')
const app = express()
const port = 3000

var {getPeople} = require('./controller')

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/people', (req, res) => {
  getPeople((err, rows) => {
    if (err) return res.status(500).end()
    var cleanedRows = rows.map((row) => {
      var full_name = null
      if (row.full_name) full_name = row.full_name
      if (row.first_name && row.last_name) {
        full_name = [row.first_name, row.last_name].join(' ')
      }
      return {id: row.id, full_name: full_name, created_at: row.created_at, updated_at: row.updated_at}
    })
    return res.json(cleanedRows)
  }) 
})

app.listen(port, () => console.log(`listening on port ${port}!`))
