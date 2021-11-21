const inquirer = require('inquirer');
const db = require('./db/connection');
const perform = require('./handlers/actions');
const questions = require('./prompts/questions');

// function to call question prompt, then execute desired action and repeat
function start () {
    questions()
    .then(answers => perform(answers))
    .then(start);
};

start();