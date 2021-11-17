const db = require('../db/connection');
const Ctable = require('console.table');

const viewDepartments = () => {
    const sql = `SELECT name FROM departments`;

    return db.query(sql)
    .then(results => {
        [rows] = results;
        console.table(rows);
    })
    .catch(console.log);
};

const addDepartment = (info) => {
    const newDepartment = info.addDepartment;
    
    const sql = `INSERT INTO departments (name) VALUES (?)`;

    return db.query(sql, newDepartment)
    .then(console.log('Department Added!'))
    .catch(console.log);
};

module.exports = { viewDepartments, addDepartment };