const inquirer = require("inquirer");
const Team = require("./lib/Team");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const getEngineerInfo = require("./helper_functions/getEngineerInfo");
const getInternInfo = require("./helper_functions/getInternInfo");
const generateHTML = require("./helper_functions/generateHTML");

// Create obj for the team to store all the members.
const team = new Team;

const addManager = manager => {
    // Add manager to team.
    team.addMember(manager);
    // Start building team
    buildTeam();
}

const buildTeam = async () => {
    // Prompt user if they wish to add more members (and which if so) or finish building.
    const promptAnswer = await teamBuildChoices();

    switch (promptAnswer.options) {
        case "Add engineer":
            addEngineer();
            break;
        case "Add intern":
            addIntern();
            break;
        case "Finish building my team":
            finishBuildingTeam();
            break;
    }
}

const teamBuildChoices = () => {
    return inquirer.prompt([
        {
            name: "options",
            type: "list",
            choices: ["Add engineer", "Add intern", "Finish building my team"]
        }
    ])
}
// Adds engineer to team
const addEngineer = async () => {
    // Call function for prompting questions
    const engineerInfo = await getEngineerInfo();
    const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github)
    team.addMember(engineer);

    // Call buildteam again after engineer is made and added to team.
    buildTeam();
}

// Adds intern to team
const addIntern = async () => {
    // Call function for prompting questions.
    const internInfo = await getInternInfo();
    const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
    team.addMember(intern);

    // Recall buildteam
    buildTeam();
}

// Function for building the team's html page
const finishBuildingTeam = () => {
    generateHTML(team);
}

module.exports = addManager;