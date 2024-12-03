"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var oops_1 = require("./oops");
var college = /** @class */ (function (_super) {
    __extends(college, _super);
    function college(stuid, stuname, stuaddr, collname, colladdr) {
        var _this = _super.call(this, stuid, stuname, stuaddr) || this;
        _this.cname = collname;
        _this.caddr = colladdr;
        return _this;
    }
    college.prototype.studentDetails = function () {
        console.log("stuId: ".concat(this.sid, " stuName: ").concat(this.sname, " collegeName: ").concat(this.cname, " collegeAddr: ").concat(this.caddr));
    };
    return college;
}(oops_1.default));
var collegeObj = new college(4569, "Rupesh", "Ongole", "Bharath University", "Selayiur,Tambaram");
collegeObj.studentDetails();
