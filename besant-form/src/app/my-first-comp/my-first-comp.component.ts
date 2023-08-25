//global overview of our component

import { Component } from '@angular/core';

@Component({ //component anotation takes a object
  selector: 'app-my-first-comp', //
  templateUrl: './my-first-comp.component.html', //you can point to html file or use templete
  styleUrls: ['./my-first-comp.component.css'] // list of style files
})
export class MyFirstCompComponent {
  //varaiable
  name: string = '';
  email: string = '';
  message: string = '';
  onSubmitted: boolean = false;


  onSubmit(): void{
    this.onSubmitted =true;
  }
}
