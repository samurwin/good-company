const db = require('../db/connection');
const Ctable = require('console.table');

// list all employees
const viewEmployees = () => {
    const sql = `SELECT e.first_name, e.last_name, roles.title AS role, roles.salary AS salary, m.first_name AS manager
    FROM employees e
    LEFT JOIN roles ON roles.id = e.role_id
    LEFT JOIN employees m ON m.id = e.manager_id;`

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        return;
    })
};

// list employees by department
const byDepartment = (info) => {
    const department = info.department;

    switch(department) {
        case 'Engineering':
            id = 1;
            break;
        case 'Creative':
            id = 2;
            break;
        case 'Marketing':
            id = 3;
            break;
        case 'Finance':
            id = 4;
            break;
    };

    const sql = `SELECT e.first_name, e.last_name, roles.title AS role, roles.salary AS salary, m.first_name AS manager
    FROM employees e
    LEFT JOIN roles ON roles.id = e.role_id
    LEFT JOIN employees m ON m.id = e.manager_id
    WHERE roles.department_id = ?`

    db.query(sql, id, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        return;
    });
};

// list employees by manager
const byManager = (info) => {
    const manager = info.manager;

    const sql = `SELECT e.first_name, e.last_name, roles.title AS role, roles.salary AS salary, m.first_name AS manager
    FROM employees e
    LEFT JOIN roles ON roles.id = e.role_id
    LEFT JOIN employees m ON m.id = e.manager_id
    WHERE m.first_name = ?`

    db.query(sql, manager, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        return;
    });
};

// add an employee
const addEmployee = (info) => {
    const first_name = info.first_name;
    const last_name = info.last_name;

    // find the new role_id
    const roles = ['Front-end Developer', 'Back-end Developer', 'Lead Engineer', 'UX Designer', 'Graphic Designer', 'Creative Director', 'Marketing Coordinator', 'Marketing Analyst', 'Marketing Director',
    'Accountant', 'Finanial Analyst', 'Finance Manager '];
    const findRole = (element) => element === info.newRole;
    const role_id = roles.findIndex(findRole) + 1;

    // find the manager_id
    const managers = ['Ali', 'Samantha', 'Dave', 'Tessa', 'None'];
    const findManager = (element) => element === info.newManager;
    const manager_id = managers.findIndex(findManager) + 1;
    if (manager_id === 5) {
        manager_id = null;
    }

    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?);`
    const params = [first_name, last_name, role_id, manager_id];
    console.log(params);

    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('Employee Added!');
        return;
    });
};

// update an employee's role
const updateRole = (info) => {
    // find the employee's id
    const employees = ['Ali Maqsood', 'Samantha Urwin', 'Dave Chappelle', 'Tessa Thompson', 'Ryan Reynolds', 'Marshall Mathers', 'Katherine Segal', 'Robyn Fenty', 'Regina King', 'Jimmy Yang', 'Idris Alba', 'Blake Lively'];
    const findEmployee = (element) => element === info.updateEmployee;
    const id = employees.findIndex(findEmployee) + 1;

    // find the new role_id
    const roles = ['Front-end Developer', 'Back-end Developer', 'Lead Engineer', 'UX Designer', 'Graphic Designer', 'Creative Director', 'Marketing Coordinator', 'Marketing Analyst', 'Marketing Director',
    'Accountant', 'Finanial Analyst', 'Finance Manager '];
    const findRole = (element) => element === info.newRole;
    const role_id = roles.findIndex(findRole) + 1;

    const params = [role_id, id];
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;

    // update employee in the database
    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('Employee Role Updated!');
        return;
    });
};

// update an employee's manager
const updateManager = (info) => {
    // find the employee's id
    const employees = ['Ali Maqsood', 'Samantha Urwin', 'Dave Chappelle', 'Tessa Thompson', 'Ryan Reynolds', 'Marshall Mathers', 'Katherine Segal', 'Robyn Fenty', 'Regina King', 'Jimmy Yang', 'Idris Alba', 'Blake Lively'];
    const findEmployee = (element) => element === info.updateEmployee;
    const id = employees.findIndex(findEmployee) + 1;

    // find the new manager_id
    const managers = ['Ali', 'Samantha', 'Dave', 'Tessa', 'None'];
    const findManager = (element) => element === info.newManager;
    const manager_id = managers.findIndex(findManager) + 1;
    if (manager_id === 5) {
        manager_id = null;
    }

    const sql = `UPDATE employees SET manager_id = ? WHERE id = ?`;
    const params = [manager_id, id];

    db.query(sql, params, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('Employee Manager Updated!');
        return;
    });
};

const deleteEmployee = (info) => {
    // find the employee's id
    const employees = ['Ali Maqsood', 'Samantha Urwin', 'Dave Chappelle', 'Tessa Thompson', 'Ryan Reynolds', 'Marshall Mathers', 'Katherine Segal', 'Robyn Fenty', 'Regina King', 'Jimmy Yang', 'Idris Alba', 'Blake Lively'];
    const findEmployee = (element) => element === info.updateEmployee;
    const id = employees.findIndex(findEmployee) + 1;

    const sql = `DELETE FROM employees WHERE id = ?`;

    db.query(sql, id, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('Employee Deleted!');
        return;
    });
};


module.exports = { viewEmployees, byDepartment, byManager, addEmployee, updateRole, updateManager, deleteEmployee };