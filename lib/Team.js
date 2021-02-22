class Team {
    constructor() {
        this.members = {}
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
    addMember(toBeAdded) {
        this.members[toBeAdded.getName()] = toBeAdded;
    }
}

module.exports = Team;