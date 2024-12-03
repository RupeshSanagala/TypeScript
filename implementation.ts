import IEmployee from "./interface";
class Organization implements IEmployee{
    empId: number;
    empName: string;
    eContact: number;
    constructor(id:number,name:string,contact:number){
        this.empId=id;
        this.empName=name;
        this.eContact=contact;

    }
    empDetails(): string {
        return `Id:${this.empId} Name:${this.empName} Contact:  ${this.eContact}`
    }

}

let OrganizationObj = new Organization(999,'rupesh sanagala',7075482238);
console.log(OrganizationObj.empDetails());