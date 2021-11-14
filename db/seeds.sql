INSERT INTO departments (name)
VALUES
('Engineering'), ('Creative'), ('Marketing'), ('Finance');

INSERT INTO roles (title, salary, department_id)
VALUES
('Front-end Developer', 75000, 1),
('Back-end Developer', 80000, 1),
('Lead Engineer', 120000, 1),
('UX Designer', 80000, 2),
('Graphic Designer', 72000, 2),
('Creative Director', 140000, 2),
('Marketing Coordinator', 70500, 3),
('Marketing Analyst', 72000, 3),
('Marketing Director', 92000, 3),
('Accountant', 72000, 4),
('Financial Analyst', 72500, 4),
('Finance Manager', 88000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Ali', 'Maqsood', 3, NULL),
('Samantha', 'Urwin', 6, NULL),
('Dave', 'Chappelle', 9, NULL),
('Tessa', 'Thompson', 12, NULL),
('Ryan', 'Reynolds', 1, 1),
('Marshall', 'Mathers', 2, 1),
('Katherine', 'Segal', 4, 2),
('Robyn', 'Fenty', 5, 2),
('Regina', 'King', 7, 3),
('Jimmy', 'Yang', 8, 3),
('Idris', 'Elba', 10, 4),
('Blake', 'Lively', 11, 4);