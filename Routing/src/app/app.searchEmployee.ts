import { Component ,OnInit} from '@angular/core';
import { EmployeeService } from './app.employeeservice';

@Component({
    selector: 'search-emp',
    templateUrl: 'search.html'
})

export class SearchEmployeeComponent implements OnInit{ 
    public constructor(private service: EmployeeService) {
    }
    empId:number;
    enteredId:number;
    empAll:any[]=[];
    searchedList:any[];
    ngOnInit(){
        this.empAll=this.service.getAllEmployee();
    }
    search(id){
        this.enteredId=parseInt(id);
       this.searchedList=this.empAll.filter(o=>o.empId===this.enteredId);
       
    }
    }
