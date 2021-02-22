const inquirer = require("inquirer");
const Team = require("./lib/Team");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const getEngineerInfo = require("./helper_functions/getEngineerInfo");
const getInternInfo = require("./helper_functions/getInternInfo");
const generateHTML = require("./helper_functions/generateHTML");
const writeHTMLtoFile = require("./helper_functions/writeHTMLtoFile");

// Create obj for the team to store all the members.
let team;

const addManager = manager => {
    team = new Team(manager);
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
    team.addMember(engineer, "engineer");

    // Call buildteam again after engineer is made and added to team.
    buildTeam();
}

// Adds intern to team
const addIntern = async () => {
    // Call function for prompting questions.
    const internInfo = await getInternInfo();
    const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
    team.addMember(intern, "intern");

    // Recall buildteam
    buildTeam();
}

// Function for building the team's html page
const finishBuildingTeam = async () => {
    // Generate HTML page content
    const html = await generateHTML(team);

    // Create HTML page
    writeHTMLtoFile("HTML/index.html", html);
}

module.exports = addManager;