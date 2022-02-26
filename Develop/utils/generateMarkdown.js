// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    console.log(license);
    return `<img src=https://img.shields.io/badge/License-${license
      .split(" ")
      .join("_")}-yellow.svg>`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)

  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Contributing 
  ${data.contributors}


  ## Questions
  For any questions please contact via Github or email.

  * Github - https://github.com/${data.github}

  * Email - ${data.email}

  ## License
  This project is licensed under 

  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
