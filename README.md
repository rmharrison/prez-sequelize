# prez-sequelize
Presentation: https://docs.google.com/presentation/d/13FfOHKwUvpPM3SzAx4boi5m1IMEFwkzSYTYj-6GbBy8

## Run Postgres with Docker
```
docker run -p 5432:5432 -d -e POSTGRES_DB=demodb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=admin postgres:9.6
```

## PSQL
```
PGPASSWORD=admin psql -h localhost -U postgres -d demodb
```

## Example folders

| Folder      | Desc |
|-------------|------|
| 0-raw-sql   | SQL + `full_name` |
| 1-raw-sql   | SQL + `first_name`, `last_name` |
| 2-sequelize | Sequelize + `full_name` |
| 3-sequelize | Sequelize w/ migration `full_name` --> `first_name`, `last_name` |
