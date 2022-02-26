// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your Project title?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a Project Title");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Add a description for your project?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please provide a description for your project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter installation instructions");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this app?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a usage description!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: [
      "MIT",
      "GNU",
      "Apache License 2.0",
      "BSD 2-Clause Simplified License",
      "Boost Software License 1.0",
    ],
    default: ["MIT"],
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please choose a license!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide testing information for this project",
  },
  {
    type: "input",
    name: "contributors",
    message: "Any contributers?",
  },
  {
    // these inputs are added to the Questions section
    type: "input",
    name: "github",
    message: "Please provide your Github username",
    validate: (input) => {
      if (!input) {
        return "Please provide a username";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    name: "email",
    message: "Please provide your email address",
    validate: (input) => {
      if (!input) {
        return "Please provide an email address";
      } else {
        return true;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
  fs.writeFile(filename, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", answers);
  });
}

// Function call to initialize app
init();
