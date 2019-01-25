const pg = require('pg')

const conString = "postgres://postgres:admin@localhost:5432/demodb"
const client = new pg.Client(conString)

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
    return err
  }
  return null
})

/* getPeople(cb)
 *
 * cb(err, rows)
 * rows = [ {}, ... ]
 */
function getPeople(cb) {
  client.query('SELECT * FROM person', (err, res) => {
    if (err) {
      console.error('query error', err.stack)
      return cb(err, null)
    }
    console.log(res.rows)
    //client.end()
    return cb(null, res.rows)
  })
}

module.exports = {getPeople}
