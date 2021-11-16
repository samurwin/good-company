const db = require('../db/connection');
const Ctable = require('console.table');

const viewRoles = () => {
    const sql = `SELECT title, salary, departments.name AS department
    FROM roles
    LEFT JOIN departments ON department_id = departments.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        return;
    });
};

const addRole = (info) => {
    const role = info.addRole;
    const salary = info.salary;

    const departments = ['Engineering', 'Creative', 'Marketing', 'Finance'];
    const findDepartmentId = (element) => element === info.roleDepartment;
    const department_id = departments.findIndex(findDepartmentId) + 1;
    
    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?,?,?)`;
    const params = [role, salary, department_id];

    db.query(sql, params,(err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Role Added!');
        return;
    });
};

module.exports = { viewRoles, addRole };