import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project1Component } from './project1/project1.component';
import { WorkComponent } from './components/work/work.component';
import { JBComponent } from './j-b/j-b.component';

@NgModule({
  declarations: [
    AppComponent,
    Project1Component,
    WorkComponent,
    JBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
