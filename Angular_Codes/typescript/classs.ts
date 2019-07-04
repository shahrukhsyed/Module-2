import {IEmployee} from './Employee';

var empall:IEmployee[]=[
{empId:101,empName:"ABCD",empSalary:10000.11,empStatus:true},
{empId:102,empName:"BCD",empSalary:10000.11,empStatus:true},
{empId:103,empName:"BC",empSalary:10000.11,empStatus:true}

];
empall.push({empId:104,empName:"BCD",empSalary:10000.11,empStatus:true}
);
empall.splice(1,1);
for(let data of empall){
    console.log(data.empId+" "+data.empName+" "+data.empSalary+" "+data.empStatus);  
}

//console.log(empall);