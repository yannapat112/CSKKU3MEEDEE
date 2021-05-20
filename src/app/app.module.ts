import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project1Component } from './project1/project1.component';
import { ChatchaicomponentComponent } from './chatchaicomponent/chatchaicomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    Project1Component,
    ChatchaicomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
