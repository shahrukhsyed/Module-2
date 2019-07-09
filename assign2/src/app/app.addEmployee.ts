
import {Component} from '@angular/core';

@Component({
    selector:'add-emp',
    templateUrl: 'app.add.html'
})

export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSalary:number;
    flag:boolean=false;
    empAll:any[]=[];
    addEmployee():any{
        this.flag=true;
    }
}
