const inquirer = require('inquirer');

const questions = () => {

    // questions for user
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'View Employees by Department', 'View Employees by Manager', 'Add Employee', 'Update Employee Role', 'Update Employee Manager', 'Delete Employee',
            'View Departments', 'Add a Department', 'View Roles', 'Add a Role']
        },
        {
            type: 'list',
            name: 'department',
            message: 'Pick a department.',
            choices: ['Engineering', 'Creative', 'Marketing', 'Finance'],
            when: ({ action }) => {
                if (action === 'View Employees by Department') {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Pick a manager.',
            choices: ['Ali', 'Samantha', 'Dave', 'Tessa', 'None'],
            when: ({ action }) => {
                if (action === 'View Employees by Manager') {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the Employees first name?',
            when: ({ action }) => {
                if (action === 'Add Employee') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter a first name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the Employees last name?',
            when: ({ first_name }) => {
                if (first_name) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter a last name!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is this Employees role?',
            choices: ['Front-end Developer', 'Back-end Developer', 'Lead Engineer', 'UX Designer', 'Graphic Designer', 'Creative Director', 'Marketing Coordinator', 'Marketing Analyst', 'Marketing Director',
            'Accountant', 'Finanial Analyst', 'Finance Manager '],
            when: ({ last_name }) => {
                if (last_name) {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'list',
            name: 'manager',
            choices: ['Ali', 'Samantha', 'Dave', 'Tessa', 'None'],
            when: ({ role }) => {
                if (role) {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'list',
            name: 'updateEmployee',
            choices: ['Ali Maqsood', 'Samantha Urwin', 'Dave Chappelle', 'Tessa Thompson', 'Ryan Reynolds', 'Marshall Mathers', 'Katherine Segal', 'Robyn Fenty', 'Regina King', 'Jimmy Yang', 'Idris Alba', 'Blake Lively'],
            message: 'Which employee would you like to update?',
            when: ({ action }) => {
                if (action === 'Update Employee Role' || action === 'Update Employee Manager') {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'list',
            name: 'newRole',
            message: 'What role would you like to update to?',
            choices: ['Front-end Developer', 'Back-end Developer', 'Lead Engineer', 'UX Designer', 'Graphic Designer', 'Creative Director', 'Marketing Coordinator', 'Marketing Analyst', 'Marketing Director',
            'Accountant', 'Finanial Analyst', 'Finance Manager '],
            when: ({ action }) => {
                if (action === 'Update Employee Role') {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'list',
            name: 'newManager',
            message: 'What manager would you like to update to?',
            choices: ['Ali', 'Samantha', 'Dave', 'Tessa', 'None'],
            when: ({ action }) => {
                if (action === 'Update Employee Manager') {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'list',
            name: 'delete',
            choices: ['Ali Maqsood', 'Samantha Urwin', 'Dave Chappelle', 'Tessa Thompson', 'Ryan Reynolds', 'Marshall Mathers', 'Katherine Segal', 'Robyn Fenty', 'Regina King', 'Jimmy Yang', 'Idris Alba', 'Blake Lively'],
            when: ({ action }) => {
                if (action === 'Delete Employee') {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            name: 'addDepartment',
            message: 'What department would you like to add?',
            when: ({ action }) => {
                if (action === 'Add a Department') {
                    return true;
                }
                return false;
            },
            validate: nameInput => {
                if (!nameInput) {
                    console.log('Please enter the name of the department');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'addRole',
            message: 'What role would you like to add?',
            when: ({ action }) => {
                if (action === 'Add a Role') {
                    return true;
                }
                return false;
            },
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary? (without decimals)',
            when: ({ addRole }) => {
                if (!addRole) {
                    return false;
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'roleDepartment',
            message: 'What department is this role under?',
            choices: ['Engineering', 'Creative', 'Marketing', 'Finance'],
            when: ({ salary }) => {
                if (!salary) {
                    return false;
                }
                return true;
            }
        }
    ]);
};

module.exports = questions;