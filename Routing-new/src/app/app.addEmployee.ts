import { Component } from '@angular/core';
import { EmployeeService } from './app.employeeservice';
import {Router} from '@angular/router';
@Component({
    selector: 'add-emp',
    templateUrl: 'add.html'
})

export class AddEmployeeComponent {
    public constructor(private service: EmployeeService,private router:Router) {
    }
    empId:number;
    empName:string;
    empSal:number;
    empDep:string;
    myallData:any;
    addData(){
        this.myallData={empId:this.empId,empName:this.empName,empSal:this.empSal,empDep:this.empDep}
        if(this.service.addEmployee(this.myallData)){
            this.router.navigate(['show']);
        }
    }


 }