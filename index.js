// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { makeBadge, ValidationError } = require('badge-maker');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a project\'s description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a usage information:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide License:'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'github name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address?'
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


function createBadge(){
    const format = {
        label: 'build',
        message: 'passed',
        color: 'green',
      }
      
      const svg = makeBadge(format)
      console.log(svg) // <svg...
      
      try {
        makeBadge({})
      } catch (e) {
        console.log(e) // ValidationError: Field `message` is required
      } 

}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const test = `# Project Title: \n#${answers.title}\n## Description\n${answers.description}## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributions](#contributions)\n- [Tests](#tests)\n- [Questions](#questions)\n## Installation\n${answers.installation}\n## Usage\n${answers.usage}\n## License\n${answers.license}\n## Contributions\n${answers.contributions}\n## Tests\n${answers.test}\n## Questions\n- GitHub: [${answers.github}](https://github.com/${answers.github})\n- Reach me at:(mailto:${answers.email})`;
        fs.writeFile('new.md', test, err => {
            if (err) {
                console.error(err);
            } else {
                console.log('README file generated successfully!');
            }
        });

    });
}

// Function call to initialize app
init();
/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/