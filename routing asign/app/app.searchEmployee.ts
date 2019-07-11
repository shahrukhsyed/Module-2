import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'search-emp',
    templateUrl: 'search.html'
})

export class SearchEmployeeComponent { 
    public constructor(private router:Router) {
    }
    empId:number;
    enteredId:number;
    empAll:any[]=[];
    searchedList:any[];
    datasearch:any;
  
    search(){
       this.router.navigate(['show',this.empId]);;
     }
}
                                                                                                                            