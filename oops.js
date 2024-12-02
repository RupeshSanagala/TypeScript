var Student = /** @class */ (function () {
    //create a constructor
    function Student(id, name, address) {
        //data-member
        this.sid = 4569;
        this.sname = "rupesh";
        this.saddress = "ongole";
        this.sid = id;
        this.sname = name;
        this.saddress = address;
    }
    //memner-function
    Student.prototype.getDetails = function () {
        console.log("My name is ".concat(this.sname, " and i am from ").concat(this.saddress));
    };
    return Student;
}());
var sObject = new Student(102, "arjun", "chennai");
var sObject1 = new Student(103, "deva", "goa");
console.log(sObject);
console.log(sObject1);
console.log(sObject.sname);
sObject.getDetails();
