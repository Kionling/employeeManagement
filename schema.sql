DROP DATABASE IF EXISTS workplace_db;
CREATE DATABASE workplace_db;
USE  workplace_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    -- holds department name--
    name VARCHAR(30),
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
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY (id)
);
SELECT * FROM employees;
SELECT * FROM roles;
SELECT * FROM departments;

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Danny", "Jauregui", 0, 0);