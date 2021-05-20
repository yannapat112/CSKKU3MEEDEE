import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project1Component } from './project1/project1.component';
import { WorkComponent } from './components/work/work.component';
import { ChatchaicomponentComponent } from './chatchaicomponent/chatchaicomponent.component';
import { Project2Component } from './project2/project2.component';

@NgModule({
  declarations: [
    AppComponent,
    Project1Component,
    WorkComponent,
    ChatchaicomponentComponent,
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
