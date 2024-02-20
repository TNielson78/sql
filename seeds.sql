-- Path: seeds.sql
-- Compare this snippet from schema.sql:
-- INSERT INTO department (name) VALUES ('Sales');
-- INSERT INTO department (name) VALUES ('Engineering');
-- INSERT INTO department (name) VALUES ('Finance');
-- INSERT INTO department (name) VALUES ('Legal');
-- INSERT INTO department (name) VALUES ('Human Resources');
-- INSERT INTO department (name) VALUES ('Marketing');
-- INSERT INTO department (name) VALUES ('Customer Service');
-- ```
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Adam', 'Smith', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Karen', 'Doe', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Mike', 'Chan', 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Sarah', 'Smith', 6, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Tom', 'Chan', 7, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Maggie', 'Doe', 8, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('David', 'Smith', 9, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Samantha', 'Chan', 10, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Alex', 'Doe', 11, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Ashley', 'Smith', 12, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Charlie', 'Chan', 13, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Diana', 'Doe', 14, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Evan', 'Smith', 15, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Frank', 'Chan', 16, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Grace', 'Doe', 17, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Henry', 'Smith', 18, 3);

INSERT INTO role (title, salary, department_id) VALUES ('Sales Lead', 100000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Salesperson', 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', 150000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 120000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 125000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Legal Team Lead', 250000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('Lawyer', 190000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('HR Lead', 120000, 5);
INSERT INTO role (title, salary, department_id) VALUES ('HR Representative', 80000, 5);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Lead', 150000, 6);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Manager', 120000, 6);
INSERT INTO role (title, salary, department_id) VALUES ('Customer Service Lead', 100000, 7);
INSERT INTO role (title, salary, department_id) VALUES ('Customer Service Representative', 80000, 7);
```
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');
INSERT INTO department (name) VALUES ('Human Resources');
INSERT INTO department (name) VALUES ('Marketing');
INSERT INTO department (name) VALUES ('Customer Service');
```

INSERT INTO 



