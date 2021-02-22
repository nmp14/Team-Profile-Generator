const Team = require("./lib/Team");

const buildTeam = (manager) => {
    const team = new Team;
    team.addMember(manager);
    console.log(team);
}

module.exports = buildTeam;