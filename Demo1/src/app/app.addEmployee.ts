
import {Component} from '@angular/core';

@Component({
    selector:'add-emp',
   /* template:`  Employee Id is : {{empId}} <br/>
    Employee Name is : {{empName}} <br/>
    Employee Salary is : {{empSalary}} <br/>`
    */
   templateUrl: 'app.add.html'
})

export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSalary:number;


    empAll:any[]=[
        {empId:101,empName:"abcd",empSalary:1234},
        {empId:102,empName:"bcd",empSalary:1234},
        {empId:103,empName:"bc",empSalary:1234},
          
    ];

    addEmployee():any{
        this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary});
        console.log("Employee Added....."+this.empAll);
    }
    deleteEmployee(i:number):any{
        this.empAll.splice(i,1);
        alert("delete.....");
    }

    

}