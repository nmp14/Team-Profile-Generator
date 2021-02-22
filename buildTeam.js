const inquirer = require("inquirer");
const Team = require("./lib/Team");
const getEngineerInfo = require("./helper_functions/getEngineerInfo");
const Engineer = require("./lib/Engineer");

// Create obj for the team
const team = new Team;

const buildTeam = async (manager) => {
    // Add manager to team.
    team.addMember(manager);

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
            buildTeam();
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

const addEngineer = async () => {
    const engineerInfo = await getEngineerInfo();
    const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github)
    team.addMember(engineer);

    // Call teambuild choices again after engineer is made and added to team.
    teamBuildChoices();
}

module.exports = buildTeam;