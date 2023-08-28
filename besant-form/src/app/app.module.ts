import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { MySecondCompComponent } from './my-second-comp/my-second-comp.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './message-details/message-details.component';

@NgModule({ //decorator and a bench of properties
  declarations: [
    AppComponent, // declare components of application
    MyFirstCompComponent, MySecondCompComponent, MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,// routing module
    FormsModule// use for form module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
