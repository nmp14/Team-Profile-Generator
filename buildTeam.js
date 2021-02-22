const inquirer = require("inquirer");
const Team = require("./lib/Team");

// Create obj for the team
const team = new Team;

const buildTeam = async (manager) => {
    // Add manager to team.
    team.addMember(manager);

    // Prompt user if they wish to add more members (and which if so) or finish building.
    const promptAnswer = await teamBuildChoices();

}

const teamBuildChoices = () => {
    return inquirer.prompt([
        {
            name: "options",
            type: "list",
            choices =["Add engineer", "Add intern", "Finish building my team"]
        }
    ])
}

module.exports = buildTeam;