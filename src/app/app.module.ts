import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NtComponent } from './nt/nt.component';
import { Project1Component } from './project1/project1.component';
import { WorkComponent } from './components/work/work.component';
import { ChatchaicomponentComponent } from './chatchaicomponent/chatchaicomponent.component';


import { JBComponent } from './j-b/j-b.component';
import { Project2Component } from './project2/project2.component';

@NgModule({
  declarations: [
    AppComponent,
    NtComponent,
    Project1Component,
    WorkComponent,
    ChatchaicomponentComponent,
    ChatchaicomponentComponent,
    WorkComponent,
    JBComponent,
    Project2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
