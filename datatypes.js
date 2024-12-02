console.log("Welcome you all to typescript");
var fname;
fname = "Narasimha";
var lname = "gorla";
console.log("firstname:".concat(fname, " Last Name ").concat(lname));
//2.number
var num1 = 100, num2 = 0.5, num3 = 123;
console.log(num1, num2, num3);
//boolean
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
//4.array
var courses = ["html", "css", "js", "react"];
var courses1 = ["html", "css", "js", "react"];
var pincode = [524404, 524132, 600045];
var pincode1 = [524404, 524132, 600045];
//5.tuple : it allows us to store multiple type of data into array.
var product = [100, "Mango", true];
//6.enum : it create variable with constant value.
var days;
(function (days) {
    days[days["sun"] = 501] = "sun";
    days[days["mon"] = 502] = "mon";
    days[days["tue"] = 503] = "tue";
    days[days["wed"] = 504] = "wed";
    days[days["thur"] = 505] = "thur";
    days[days["fri"] = 506] = "fri";
    days[days["sat"] = 507] = "sat";
})(days || (days = {}));
var data1 = days.sun;
//7.union : store multiple values in single variable.
var info = true;
//8.any : when we dont know what type of data is going to store in variable in that case we use it.
var mix = "hello";
