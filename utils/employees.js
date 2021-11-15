const db = require('../db/connection');
const Ctable = require('console.table');

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
    })
};



module.exports = { viewEmployees };