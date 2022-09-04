// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
{
  type: 'input',
  name: 'name',
  message: 'What is your GitHub username?'
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email address?'
},
{
  type: 'input',
  name: 'Title',
  message: 'What is the title of your project?',
},
{
  type: 'input',
  name: 'Description',
  message: 'Please wrote a description for your project.'
},
{
  type: 'input',
  name: 'Installation',
  message: 'Please write installation instructions for your project.',
},
{
  type: 'input',
  name: 'Usage',
  message: 'Please write usage information for your project.',
},
{
  type: 'input',
  name: 'Contributing',
  message: 'Please write contribution guidelines for your project.',
},
{
  type: 'input',
  name: 'Tests',
  message: 'Please write test instructions for your project.',
},
{
  type: 'list',
  name: 'Licence',
  message: 'Please choose a license for your project.',
  choices: ['MIT', 'Apache 2.0', 'GPLv3', 'None']
},
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
