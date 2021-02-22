class Team {
    constructor() {
        this.members = {}
    }
    getMembers() {
        for (obj in members) console.log(obj);
    }
    getRoles() {
        for (member in members) console.log(`${member}: ${member.getRole()}`);
    }
    addMember(toBeAdded) {
        this.members[toBeAdded.getName()] = toBeAdded;
    }
}

module.exports = Team;