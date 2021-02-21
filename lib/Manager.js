const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;
        super(name, id, email);
    }
    getRole() {
        super.getRole();
        return "Manager";
    }
}