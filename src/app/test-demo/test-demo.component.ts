import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test-demo',
  templateUrl: './test-demo.component.html',
  styleUrls: ['./test-demo.component.css']
})
export class TestDemoComponent {

  // @Input() data = 'data';
  // @Output() dataChange=new EventEmitter(); 

  // currentData: any;

  // showData(data: any){
  //   this.dataChange.emit(this.data);
  // }

  @Input() childMsg: any;

  // message: string = "How are you?";
  // @Output() messageEvent = new EventEmitter<string>();
  // showMessage() {
  //   this.messageEvent.emit(this.message)
  // }

  message: string = "How are you?";
  messageTwo: string = "Fine"

  @Output() messageEvent = new EventEmitter<{message:string,messageTwo:string}>();
  showMessage() {
    this.messageEvent.emit({message:this.message,messageTwo:this.messageTwo});
  }

}
