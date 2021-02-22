class Team {
    constructor(manager) {
        this.manager = manager;
        this.engineers = [];
        this.interns = [];
    }
    getMembers() {
        for (const obj in this.members) {
            console.log(obj);
        }
    }
    getRoles() {
        for (const obj in this.members) {
            console.log(`${this.members[obj].getName()}: ${this.members[obj].getRole()}`);
        }
    }
    addMember(toBeAdded, role) {
        if (role === "engineer") {
            this.engineers.push(toBeAdded);
        } else {
            this.interns.push(toBeAdded);
        }
    }
}

module.exports = Team;