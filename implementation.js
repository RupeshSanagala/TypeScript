"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Organization = /** @class */ (function () {
    function Organization(id, name, contact) {
        this.empId = id;
        this.empName = name;
        this.eContact = contact;
    }
    Organization.prototype.empDetails = function () {
        return "Id:".concat(this.empId, " Name:").concat(this.empName, " Contact:  ").concat(this.eContact);
    };
    return Organization;
}());
var OrganizationObj = new Organization(999, 'rupesh sanagala', 7075482238);
console.log(OrganizationObj.empDetails());
