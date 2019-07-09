import { Component, Input ,OnChanges} from '@angular/core';

@Component({
    selector: 'show-emp',
    templateUrl: 'app.show.html'
})

export class ShowEmployeeComponent implements OnChanges{
    empId:number;
    empName:string;
    empSalary:number;
    flag:boolean=false;
    empAll:any[]=[];
    ngOnChanges(): void {
       this.empAll.push({empId:this.id,empName:this.name,empSalary:this.salary});
    } 


  
    @Input()
    name:string;

    @Input()
    id:number;

    @Input()
    salary:number;

}