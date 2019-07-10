import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    enteredId:number;
    searchedList:any;
    constructor(private http:HttpClient){}

    empAll:any[]=[{empId:1001,empName:"Ankish",empSal:2389.11,empDep:"Java"},
    {empId:1002,empName:"Akshat",empSal:5389.11,empDep:"Java"},
    {empId:1003,empName:"Preeti",empSal:12389.11,empDep:"JavaScript"}];
   

    getAllEmployee(){
        return this.empAll;
     }

     addEmployee(data:any){
         this.empAll.push(data);
         return true;
     }
    
}