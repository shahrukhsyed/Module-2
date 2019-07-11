import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddEmployeeComponent } from './app.addEmployee';
import {ShowEmployeeComponent } from './app.showEmployee';
import {SearchEmployeeComponent } from './app.searchEmployee';
import {Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MyPipe} from './app.myownpipe';

const routes:Routes=[
    {path:'',redirectTo:'show',pathMatch:'full'},
    {path:'add',component:AddEmployeeComponent},
    {path:'show',component:ShowEmployeeComponent},
    {path:'show/:id',component:ShowEmployeeComponent},
    
    {path:'search',component:SearchEmployeeComponent},
    
];

@NgModule({
    imports: [
        BrowserModule,RouterModule.forRoot(routes),HttpClientModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent,ShowEmployeeComponent,SearchEmployeeComponent,MyPipe
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }