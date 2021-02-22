const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const buildTeam = require("./buildTeam");

const init = async () => {
    const answer = await getManagerInfo();
    const manager = new Manager(answer.managerName, answer.employeeID, answer.email, answer.number);
    // Call team builder to finish adding team members and pass manager as argument
    buildTeam(manager);
}

// Prompt for info for manager
const getManagerInfo = () => {
    return inquirer.prompt([
        {
            name: "managerName",
            message: "Enter name of team manager"
        },
        {
            name: "employeeID",
            message: "Enter employee ID of team manager"
        },
        {
            name: "email",
            message: "Enter email"
        },
        {
            name: "number",
            message: "Enter office number"
        }
    ])
}

init();