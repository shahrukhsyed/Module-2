import { Component, Input } from '@angular/core';

@Component({
    selector: 'show-emp',
    templateUrl: 'app.show.html'
})

export class ShowEmployeeComponent { 
  
    @Input()
    array:any[];
    
    empId:number;
    empName:string;
    empSalary:number;

}