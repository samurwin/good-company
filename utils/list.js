const db = require('../db/connection');

const employeeList = () => {
    const sql = `SELECT CONCAT(first_name, ' ', last_name) AS name FROM employees`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        let names = rows.map(({ name }) => name);
        return names;
    });
};

const departmentList = () => {
    const sql = `SELECT name FROM departments`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        let departments = rows.map(({ name }) => name);
        return departments;
    });
};

const roleList = () => {
    const sql = `SELECT title FROM roles`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        let roles = rows.map(({ title }) => title);
        return roles;
    });
};

module.exports = { employeeList, departmentList, roleList };