const inquirer = require('inquirer');
const db = require('./db/connection');
const perform = require('./handlers/actions');
const questions = require('./prompts/questions');


function start () {
    questions()
    .then(answers => perform(answers))
    .then(start);
};

start();