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
function renderLicenseLink(license) {
  if (license != "None") {
    return `- [License](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return `This project uses the ${license} license.`;
  } else {
    return "No license is used for this project";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
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
  ${renderLicenseSection(data.license)}
  
  ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
