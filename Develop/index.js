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
            choices:[
                "[MIT License](LICENSE.txt)", 
                "[BSD 2-Clause License] (COPYING.txt)",
                
            ]
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
        1. [Project title](#project-title)
        2. [Project Description](#project-description)
        3. [Usage Information](#project-use)
        4. [Project Content](#project-content)
        5. [Project Instalation](#project-install)
        6. [Usage Informations](#project-usage)
        7. [Project License](#project-answers.license)
        8. [Project Contributions](#project-contributions)
        9. [Project Testing Project](#project-test)
        
        ## Project title
         ${answers.titleProject}

        ## Project Description
         ${answers.description}

        ## Usage Information
         ${answers.usage}

        ## Project Content
         ${answers.content}

        ## Project Instalation
         ${answers.install}

        ## Usage Informations
         ${answers.usage}

        ## License
         licensed under the ${answers.license}

        ## Project Contributions
         ${answers.contributions}

        ## Testing Project
         ${answers.test}

        ## Questions
          For additional help or questions about collaboration, please reach out to ${answers.email}
          Follow me on Github at [${answers.github}](http://github.com/${answers.github})`
        
        
          
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


   

   
