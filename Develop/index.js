// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
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
    choices: ["MIT", "GNU"],
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
    name: "contributors",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
