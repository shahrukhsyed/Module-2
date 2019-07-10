import { Component,OnInit } from '@angular/core';
import {EmployeeService} from './app.employeeservice';

@Component({
    selector: 'show-emp',
    templateUrl: 'show.html'
})

export class ShowEmployeeComponent implements OnInit { 
    
  constructor(private service: EmployeeService) {
    }
    empAll:any[]=[{empId:1001,empName:"Ankish",empSal:2389.11,empDep:"Java"},
    {empId:1002,empName:"Akshat",empSal:5389.11,empDep:"Java"},
    {empId:1003,empName:"Preeti",empSal:12389.11,empDep:"JavaScript"}];
    ngOnInit(): void {
        this.empAll=this.service.getAllEmployee();
    } 

}