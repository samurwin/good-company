const db = require('../db/connection');
const Ctable = require('console.table');

const viewDepartments = () => {
    const sql = `SELECT name FROM departments`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        return;
    });
};

const addDepartment = (info) => {
    const newDepartment = info.addDepartment;
    
    const sql = `INSERT INTO departments (name) VALUES (?)`;

    db.query(sql, newDepartment, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Department Added!');
        return;
    });
};

module.exports = { viewDepartments, addDepartment };