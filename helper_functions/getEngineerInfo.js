const inquirer = require("inquirer");

const getEngineerInfo = () => {
    return inquirer.prompt([
        {
            name: "name",
            message: "Enter engineer's name",
        },
        {
            name: "id",
            message: "Enter ID"
        },
        {
            name: "email",
            message: "Enter email",
        },
        {
            name: "github",
            message: "Github username"
        }
    ])
}

module.exports = getEngineerInfo;