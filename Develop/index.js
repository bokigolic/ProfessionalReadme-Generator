const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "titleProject",
            message: "What is project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project" 
        },
        {
            type: "input",
            name: "content",
            message: "What is content of project?" 
        },
      
        {
            type: "input",
            name: "install",
            message: "What did you instal?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is the use of application?"
        },
        {
            type: "checkbox",
            message: "License?",
            name: "license",
            choices: [
              "[MIT License](LICENSE.txt)", 
              "[GNU GPLv3 License](COPYING.txt)" ]
        },

        {
            type: "input",
            name: "contributions",
            message: "What is contibution?"
        },
        {
            type: "input",
            name: "test",
            message: "Test application"
        },
        
        {
            type: "input",
            name: "questions",
            message: "Any qusetions?"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email addres"
          },
          {
            type: "input",
            name: "github",
            message: "Enter your github username"
          }
    ])
}
    function generateREADME(answers) {
        return `# ${answers.project_title}


        #### Table of Contents
        1. [Project Description](#project-description)
        2. [Installation Instructions](#installation-instructions)
        3. [Usage Information](#usage-information)
        4. [Contributor Guidelines](#contributor-guidelines)
        5. [Code of Conduct](#code-of-conduct)
        6. [Test Instructions](#test-instructions)
        7. [License](#license)
        8. [Questions](#questions)
        ## Project Description
        * ${answers.description}
        ## Installation Instructions
        * ${answers.install}
        ## Usage Information
        * ${answers.use}
        ## Contributor Guidelines
        * ${answers.contributions}
        ## Code of Conduct
        * [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
        ## Test Instructions
        * ${answers.test}
        ## License
        * licensed under the ${answers.license}
        ## Questions
        * For additional help or questions about collaboration, please reach out to ${answers.email}
        * Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;
          
        }
        
        promptUser()
          .then(function(answers) {
            const readme = generateREADME(answers);
        
         
            return writeFileAsync("README.md", readme);
          })
          .then(function() {
            console.log(" README.md has been created!");
          })
          .catch(function(err) {
            console.log(err);
          });


   

   
