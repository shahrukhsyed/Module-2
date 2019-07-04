"use strict";
exports.__esModule = true;
var empall = [
    { empId: 101, empName: "ABCD", empSalary: 10000.11, empStatus: true },
    { empId: 102, empName: "BCD", empSalary: 10000.11, empStatus: true },
    { empId: 103, empName: "BC", empSalary: 10000.11, empStatus: true }
];
empall.push({ empId: 104, empName: "BCD", empSalary: 10000.11, empStatus: true });
empall.splice(1, 1);
for (var _i = 0, empall_1 = empall; _i < empall_1.length; _i++) {
    var data = empall_1[_i];
    console.log(data.empId + " " + data.empName + " " + data.empSalary + " " + data.empStatus);
}
//console.log(empall);
