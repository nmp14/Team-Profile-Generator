const inquirer = require("inquirer");

const getInternInfo = () => {
    return inquirer.prompt([
        {
            name: "name",
            message: "Enter intern name"
        },
        {
            name: "id",
            message: "Enter id",
        },
        {
            name: "email",
            message: "Enter their email"
        },
        {
            name: "school",
            message: "Enter school name"
        }
    ])
}

module.exports = getInternInfo;