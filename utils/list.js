const db = require('../db/connection');

const employeeList = () => {
    const sql = `SELECT CONCAT(first_name, ' ', last_name) AS name FROM employees`;

    db.query(sql)
    .then(results => {
        let names = results.map(({ name }) => name);
        return names;
    })
    .catch(console.log);
};

const managerList = () => {
    const sql = `SELECT first_name FROM employees WHERE manager_id = null`;

    db.query(sql)
    .then(results => {
        let managers = results.map(({ first_name }) => first_name);
        return managers;
    })
}

const departmentList = () => {
    const sql = `SELECT name FROM departments`;

    db.query(sql)
    .then(results => {
        let departments = results.map(({ name }) => name);
        return departments;
    })
    .catch(console.log);
};

const roleList = () => {
    const sql = `SELECT title FROM roles`;

    db.query(sql)
    .then(results => {
        let roles = results.map(({ title }) => title);
        return roles;
    })
    .catch(console.log);
};

module.exports = { employeeList, managerList, departmentList, roleList };