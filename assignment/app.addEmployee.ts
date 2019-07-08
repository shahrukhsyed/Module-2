
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
    flag:boolean=false;
    empAll:any[]=[];
    addEmployee():any{
        this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary});
        this.flag=true;
        console.log("Employee Added....."+this.empAll);
    }
    

}
