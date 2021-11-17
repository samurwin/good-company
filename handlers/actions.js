const inquirer = require('inquirer');
const { viewEmployees, byDepartment, byManager, addEmployee, updateRole, updateManager, deleteEmployee } = require('../utils/employees');
const { viewDepartments, addDepartment } = require('../utils/departments');
const { viewRoles, addRole } = require('../utils/roles');

module.exports = perform = ({ action, ...info }) => {
    switch (action) {
        case 'View All Employees':
            return viewEmployees();
        case 'View Employees by Department':
            return byDepartment(info);
        case 'View Employees by Manager':
            return byManager(info);
        case 'Add Employee':
            return addEmployee(info);
        case 'Update Employee Role':
            return updateRole(info);
        case 'Update Employee Manager':
            return updateManager(info);
        case 'Delete Employee':
            return deleteEmployee(info);
        case 'View Departments':
            return viewDepartments();
        case 'Add a Department':
            return addDepartment(info);
        case 'View Roles':
            return viewRoles();
        case 'Add a Role':
            return addRole(info);
    }
};