DROP DATABASE IF EXISTS workplace_db;
CREATE DATABASE workplace_db;
USE DATABASE workplace_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT
    -- holds department name--
    name VARCHAR(30)
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title  VARCHAR(30),
    salary DECIMAL(6,2),
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    

    PRIMARY KEY (id)
);