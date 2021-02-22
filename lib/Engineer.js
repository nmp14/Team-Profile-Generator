const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.githib = github;
    }
    getGithib() {
        return this.github;
    }
    getRole() {
        super.getRole();
        return 'Engineer';
    }
}

module.exports = Engineer;