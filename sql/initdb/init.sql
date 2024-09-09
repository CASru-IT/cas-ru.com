CREATE DATABASE cas-ru_db;

\c cas-ru_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

GRANT ALL PRIVILEGES ON users TO dugite;

INSERT INTO users (name, email, password) VALUES ('test', 'test@gmail.com', 'password');