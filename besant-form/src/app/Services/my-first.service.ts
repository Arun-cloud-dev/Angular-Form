import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
   }


  init(): void{
    this.insert({
      name: 'arun',
      email: 'test@arun.com',
      message: 'Hello Arun',
    });
    this.insert({
      name: 'raj',
      email: 'test@trun.com',
      message: 'Hello Raj',
    });
    this.insert({
      name: 'jessi',
      email: 'test@krun.com',
      message: 'Hello jessi',
    });


  }
  insert(message: { name: string, email: string, message: string }): void{
    this.messages.push(message);
  }
  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
