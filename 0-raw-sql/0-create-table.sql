CREATE TABLE Person (
    id bigserial primary key,
    name varchar(100) NOT NULL,
    created_at timestamp default CURRENT_TIMESTAMP
);
