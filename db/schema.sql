CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    salary INTEGER NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY department_id REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY role_id REFERENCES roles(id),
    manager_id INTEGER NULL FOREIGN KEY REFERENCES employees(id)
);