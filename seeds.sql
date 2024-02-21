USE employee_db;
INSERT INTO department (name) VALUES
    ('Engineering'),
    ('Sales'),
    ('Finance'),
    ('Legal');
INSERT INTO role (title, salary, department_id) VALUES
    ('Software Engineer', 100000, 1),
    ('Sales Lead', 75000, 2),
    ('Accountant', 60000, 3),
    ('Legal Team Lead', 250000, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Lilian', 'Smith', 1, NULL),
    ('John', 'Doe', 2, 1),
    ('Jane', 'Doe', 3, 1),
    ('Alice', 'Johnson', 4, 1),
    ('Bob', 'Johnson', 1, 4),
    ('Charlie', 'Thompson', 2, 4),
    ('Diana', 'Lee', 3, 4),
    ('Eve', 'Wong', 4, 4);
    


