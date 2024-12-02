
let fname:string;
fname="Narasimha";
let lname:string="gorla";
console.log(`firstname:${fname} Last Name ${lname}`);

//2.number
let num1:number=100,num2:number=0.5,num3:number=123;
console.log(num1,num2,num3);

//boolean
let cond1:boolean=true,cond2:boolean=false;
console.log(cond1,cond2);

//4.array
let courses:string[]=["html","css","js","react"];
let courses1:Array<string>=["html","css","js","react"];

let pincode:number[]=[524404,524132,600045];
let pincode1:Array<number>=[524404,524132,600045];

//5.tuple : it allows us to store multiple type of data into array.
let product:[number,string,boolean]=[100,"Mango",true];

//6.enum : it create variable with constant value.
enum days{sun=501,mon,tue,wed,thur,fri,sat}
let data1=days.sun;

//7.union : store multiple values in single variable.
let info:number | string| boolean=true;

//8.any : when we dont know what type of data is going to store in variable in that case we use it.
let mix:any="hello";
