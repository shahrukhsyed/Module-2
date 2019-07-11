import { Component,OnInit, Input} from '@angular/core';
import {EmployeeService} from './app.employeeservice';

@Component({
    selector: 'show-emp',
    templateUrl: 'showEmployee.html'
})

export class ShowEmployeeComponent {

    constructor(private service:EmployeeService){}
    

    @Input()
    empShowAll:any[];

    ngOnInit(): void {
        this.service.getAllEmployee().subscribe((data:any)=>this.empShowAll=data);
    } 
    deleteEmployee(i:number):any{
        this.empShowAll.splice(i,1);
        alert("Deletion done.....");
    }
}