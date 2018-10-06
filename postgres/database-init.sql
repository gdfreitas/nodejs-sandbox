CREATE USER docker
GRANT ALL PRIVILEGES ON DATABASE docker TO docker
CREATE DATABASE "nodejs_postgres"

\c "nodejs_postgres"

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    firstname VARCHAR(40) NOT NULL, 
    lastName VARCHAR(40) NOT NULL
)

\d users