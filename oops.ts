class Student {
    //data-member
    sid:number=4569;
    sname:string="rupesh";
    saddress:string="ongole"
    //memner-function
    getDetails(){
        console.log(`My name is ${this.sname} and i am from ${this.saddress}`);
    }
    //create a constructor
    constructor(id:number,name:string,address:string){
        this.sid=id;
        this.sname=name;
        this.saddress=address;
    }

}

let sObject = new Student(102,"arjun","chennai");
let sObject1= new Student(103,"deva","goa");
console.log(sObject)
console.log(sObject1);
console.log(sObject.sname);
sObject.getDetails();