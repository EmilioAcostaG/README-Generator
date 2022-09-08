// External packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// An array of questions for user input to use with Inquirer
const promptUser = () => {
  return inquirer.prompt([
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
  message: 'Please write a description for your project.'
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
  name: 'license',
  message: 'Please choose a license for your project.',
  choices: ['MIT', 'Apache 2.0', 'GPLv3', 'None']
},
])};

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
  `# ${title}

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ---


  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## Contributions
  ${contribution}

  ## Tests
  ${test}
  
  ## License
  Ths project is licensed under the ${license} license.
  
  ### Questions
  My GitHub username is ${username} and you can find my page [here](https://github.com/${username}). \n
  You can also reach me via email to: ${email}.`;

// Function to initialize app

  const init = () => {
   promptUser()
    //.then((answers) => console.log(answers))
    .then((answers) => fs.writeFileSync('README.md', generateReadMe(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err))
 };

 // Function call to initialize app
 init();
