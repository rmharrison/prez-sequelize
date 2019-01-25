# Sequelize CLI commands

## To generate folder from `../1-raw-sql/`
```bash
./node_modules/.bin/sequelize init
./node_modules/.bin/sequelize model:generate --name person --attributes full_name:string --underscored
./node_modules/.bin/sequelize seed:generate --name va-self-immolation
```

Sync from model
```js
const Sequelize = require('sequelize');
const config = require('./config/config')

const sequelize = new Sequelize(config.development)

var Person = sequelize.import("./models/person.js")

// with require
// var Person = require('./models/person')(sequelize, Sequelize.DataTypes)

Person.sync({force: true})
```

drop, create, migration, seed
```
./node_modules/.bin/sequelize db:drop
./node_modules/.bin/sequelize db:create
./node_modules/.bin/sequelize db:migrate
./node_modules/.bin/sequelize db:seed:all
```
