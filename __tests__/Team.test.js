const Team = require("../lib/Team");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

describe("Team class", () => {
    it("should store the member objects (manager, intern, and engineer objects/arrays)", () => {
        let manager = new Manager("test manager", 1, "manager@gmail.com", "Room 204");
        let team = new Team(manager);
        expect(team).toEqual({ manager: { name: "test manager", id: 1, email: "manager@gmail.com", officeNumber: "Room 204" }, engineers: [], interns: [] })
    });
    describe("addMember", () => {
        let engineer1 = new Engineer("engineer1", 2, "e1@gmail.com", "e1");
        let engineer2 = new Engineer("engineer2", 3, "e2@gmail.com", "e2");
        let intern = new Intern("intern name", 4, "intern@gmail.com", "FSU");

        let manager = new Manager("test manager", 1, "manager@gmail.com", "Room 204");
        let team = new Team(manager);

        team.addMember(engineer1, "engineer");
        team.addMember(engineer2, "engineer");
        team.addMember(intern, "intern");

        it("should add each member called and store them in the appropriate array", () => {
            expect(team.engineers).toEqual([engineer1, engineer2]);
            expect(team.interns).toEqual([intern]);
        })
    });
})