// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const prompt = () => {
  return inquirer.questions([
{
  type: 'input',
  name: 'username',
  message: 'What is your GitHub username?',
  //validate: 
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email address?'
},
{
  type: 'input',
  name: 'title',
  message: 'What is the title of your project?',
},
{
  type: 'input',
  name: 'description',
  message: 'Please wrote a description for your project.'
},
{
  type: 'input',
  name: 'installation',
  message: 'Please write installation instructions for your project.',
},
{
  type: 'input',
  name: 'usage',
  message: 'Please write usage information for your project.',
},
{
  type: 'input',
  name: 'contribution',
  message: 'Please write contribution guidelines for your project.',
},
{
  type: 'input',
  name: 'test',
  message: 'Please write test instructions for your project.',
},
{
  type: 'list',
  name: 'licence',
  message: 'Please choose a license for your project.',
  choices: ['MIT', 'Apache 2.0', 'GPLv3', 'None']
},
])};
// TODO: Create a function to write README file

const generateReadMe = ({
  username,
  email,
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  license
}) =>
  `#${title}

  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## Contributions
  ${contribution}
  
  ## License
  Ths project is licensed under the ${license} license.
  
  ### Questions
  My GitHub username is ${username} and you can find my page [here](github.com/${username}).
  You can also reach me via email to: ${email}.`



// function writeToFile(fileName, data) {}
// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
