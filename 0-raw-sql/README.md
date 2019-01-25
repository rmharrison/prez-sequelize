To run SQL
```
PGPASSWORD=admin psql -h localhost -U postgres -d demodb -f 0-create-table.sql
PGPASSWORD=admin psql -h localhost -U postgres -d demodb -f 1-insert.sql
PGPASSWORD=admin psql -h localhost -U postgres -d demodb -f 2-select.sql
```
