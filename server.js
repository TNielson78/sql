const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'willie',
    database: 'employee_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    start();
});

function start() {
    inquirer
        .prompt({
            name: 'start',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all employees',
                'View all departments',
                'View all roles',
                'Add employee',
                'Add department',
                'Add role',
                'Update employee role',
                'Exit'
            ]
        })
        .then((answer) => {
            switch (answer.start) {
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'View all departments':
                    viewDepartments();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'Add employee':
                    addEmployee();
                    break;
                case 'Add department':
                    addDepartment();
                    break;
                case 'Add role':
                    addRole();
                    break;
                case 'Update employee role':
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    connection.end();
                    break;
            }
        });
}

function viewEmployees() {
    connection.promise().query('SELECT CONCAT(employee.first_name, " ", employee.last_name) AS Employee, role.title AS Title, role.salary AS Salary FROM employee LEFT JOIN role ON employee.role_id= role.id').then(([rows]) => {
        console.table(rows);
        start();
    })

     

}

function viewDepartments() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewRoles() {
    connection.query('SELECT role.title AS Title, role.salary AS Salary, department.name AS Department FROM role LEFT JOIN department ON role.department_id= department.id', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

async function addEmployee() {
    const [roles]= await connection.promise().query('SELECT * FROM role');
    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));
    const [employees] = await connection.promise().query('SELECT * FROM employee');
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));
    const managerChoices = [...employeeChoices, { name: 'None', value: null }];
    inquirer
        .prompt([
            {
                name: 'first_name',
                type: 'input',
                message: 'Enter employee first name'
            },
            {
                name: 'last_name',
                type: 'input',
                message: 'Enter employee last name'
            },
            {
                name: 'role_id',
                type: 'list',
                message: 'Select employee role',
                choices: roleChoices
            },
            {
                name: 'manager_id',
                type: 'list',
                message: 'Select employee manager',
                choices: managerChoices
            }
        ])
        .then((answer) => {
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id,
                    manager_id: answer.manager_id
                },
                (err) => {
                    if (err) throw err;
                    console.log('Employee added');
                    viewEmployees();
                }
            );
        });
}

function addDepartment() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter department name'
            }
        ])
        .then(({name}) => {
            connection.query(
                'INSERT INTO department SET ?',
            name,
                (err) => {
                    if (err) throw err;
                    console.log('Department added');
                    viewDepartments();
                }
            );
        });
}

async function addRole() {
    const [departments] = await connection.promise().query('SELECT * FROM department');
    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: 'Enter role title'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'Enter role salary'
            },
            {
                name: 'department_id',
                type: 'list',
                choices: departmentChoices, 
                message: 'select department for role'
            }
        ])
        .then(({title, salary, department_id}) => {
            connection.query(
                'INSERT INTO role SET ?',
               {title, salary, department_id},
                (err) => {
                    if (err) throw err;
                    console.log('Role added');
                    viewRoles();
                }
            );
        });
}

async function updateEmployeeRole() {
    const [employees] = await connection.promise().query('SELECT * FROM employee');
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));
    const [roles] = await connection.promise().query('SELECT * FROM role');
    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));
    inquirer
        .prompt([
            {
                name: 'employee_id',
                type: 'list',
                message: 'Select employee to update role',
                choices: employeeChoices
            },
            {
                name: 'role_id',
                type: 'list',
                message: 'Select new role',
                choices: roleChoices
            }
        ])
        .then((answer) => {
            connection.query(
                'UPDATE employee SET ? WHERE ?',
                [
                    {
                        role_id: answer.role_id
                    },
                    {
                        id: answer.employee_id
                    }
                ],
                (err) => {
                    if (err) throw err;
                    console.log('Employee role updated');
                    viewEmployees();    
                }
            );
        });
}









