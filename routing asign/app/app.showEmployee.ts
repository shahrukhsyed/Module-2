import { Component,OnInit } from '@angular/core';
import {EmployeeService} from './app.employeeservice';
import {ActivatedRoute,Params} from '@angular/router';
@Component({
    selector: 'show-emp',
    templateUrl: 'show.html'
})

export class ShowEmployeeComponent implements OnInit { 
    
  constructor(private service: EmployeeService,private _active:ActivatedRoute) {
    }

    empAll:any[]=[];
    data:any;
    ngOnInit(): void {
        this.empAll=this.service.getAllEmployee();
        this.data=this._active.snapshot.params['id'];
    } 

}