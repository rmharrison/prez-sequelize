Sequelize CLI commands

Undo all migrations
```
./node_modules/.bin/sequelize db:migrate:undo:all
```

Run first migration
```
./node_modules/.bin/sequelize db:migrate --to 20190125042721-create-person.js
```

Seed data with `full_name`
```
./node_modules/.bin/sequelize db:seed --seed 20190125043240-full.js
```

Run second migration
```
./node_modules/.bin/sequelize db:migrate --to 20190125055636-full-to-first-last.js
```

Run third migration
```
./node_modules/.bin/sequelize db:migrate --to 20190125071742-delete-col-full-name.js
```

Undo last migration
```
./node_modules/.bin/sequelize db:migrate:undo
```
