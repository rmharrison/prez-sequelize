CREATE TABLE Person (
    id bigserial primary key,
    first_name varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
    created_at timestamp default CURRENT_TIMESTAMP
    updated_at timestamp default CURRENT_TIMESTAMP
);
