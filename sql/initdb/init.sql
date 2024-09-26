CREATE TABLE users2 (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users2 (name, email, password) VALUES ('test2', 'test@gmail.com', 'password');
