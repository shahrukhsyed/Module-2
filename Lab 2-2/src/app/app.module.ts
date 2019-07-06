import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SortEmployeeComponent }  from './app.sortEmployee';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,FormsModule
        
    ],
    declarations: [
        AppComponent,SortEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }