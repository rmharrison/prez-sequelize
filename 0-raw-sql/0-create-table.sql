CREATE TABLE Person (
    id bigserial primary key,
    full_name varchar(100) NOT NULL,
    created_at timestamp default CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP
);
