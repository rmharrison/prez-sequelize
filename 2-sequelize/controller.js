const db = require('./models')

/* getPeople(cb)
 *
 * cb(err, rows)
 * rows = [ {}, ... ]
 */
function getPeople(cb) {
  db.person.findAll().then((people) => {
    rows = people.map((x) => x.toJSON())
    console.log(rows)
    return cb(null, rows)
  }).catch((err) => {
    console.error('query error', err.stack)
    return cb(err, null)
  })
}

module.exports = {getPeople}
