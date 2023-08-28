//global overview of our component

import { Component } from '@angular/core';
import { MyFirstService } from '../Services/my-first.service';

@Component({
  //component anotation takes a object
  selector: 'app-my-first-comp', //
  templateUrl: './my-first-comp.component.html', //you can point to html file or use templete
  styleUrls: ['./my-first-comp.component.css'], // list of style files
})
export class MyFirstCompComponent {
  //varaiable
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];


  constructor(
    private service: MyFirstService
  )
  {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });

    console.log(this.message);
  }
  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
