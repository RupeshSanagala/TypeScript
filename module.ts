import Student  from "./oops";
class college extends Student{
    cname:string;
    caddr:string;
    
    constructor(stuid:number,stuname:string,stuaddr:string,collname:string,colladdr:string){
        super(stuid,stuname,stuaddr);
        this.cname=collname;
        this.caddr=colladdr;

    }

    studentDetails(){
        console.log(`stuId: ${this.sid} stuName: ${this.sname} collegeName: ${this.cname} collegeAddr: ${this.caddr}`);
    }


}
let collegeObj = new college(4569, "Rupesh","Ongole","Bharath University","Selayiur,Tambaram");
collegeObj.studentDetails();