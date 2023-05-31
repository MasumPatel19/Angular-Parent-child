import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child';
  // currentData='demo data work';
  // currentData:any;
  // showData(){
  //   this.currentData='data';
  // }
  // showData(event: string){
  //   this.currentData=event;
  // }

  parentMsg = "hello i am parent";

  message = 'Hey';

  receiveMessage(event: any) {
    // this.message = $event
    this.message = this.message + " " + event.message + " " + event.messageTwo;
  }
}
