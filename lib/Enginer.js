const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.githib = github;
        super(name, id, email);
    }
    getGithib() {
        return this.github;
    }
    getRole() {
        super.getRole();
        return 'Engineer';
    }
}