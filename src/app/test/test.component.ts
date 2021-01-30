import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { promises } from 'dns';
import { promise } from 'protractor';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @ViewChild('v') testView: ElementRef;
  name: string = "dedllle";
  imgUrl = 'https://www.google.com.eg/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  buttonText: string;
  inputText: string;
  buttonDisabled = false;
  buttonText2: string;
  inputText2: string = "Test Two Way Binding";
  innerTest: string = "Test innerHTML";
  buttonClicked: boolean = false;
  button2Clicked: boolean = false;
  button3Clicked: boolean = false;
  button4Clicked: boolean = false;
  elemHTMLDiv;

  elementsArray = [
    { name: "Nada", age: 23 },
    { name: "May", age: 24 },
    { name: "Ayat", age: 26 },
    { name: "Shahd", age: 15 },

  ]

  buttonEvent() {
    this.buttonText = "Test button1";
  }
  buttonEvent2() {
    this.buttonText2 = "Test button 2";
  }
  onInput(e) {
    this.inputText = e.target.value;
  }
  onButtonClicked() {
    this.buttonClicked = true;
  }
  getColor(): string {
    return this.buttonClicked ? 'yellow' : 'blue';
  }
  onButton2Clicked() {
    this.button2Clicked = true;
  }
  onButton3Clicked() {
    this.button3Clicked = true;
  }
  onButton4Clicked() {
    this.button4Clicked = true;
  }
  getColor3(): string {
    return this.button3Clicked ? 'yellow' : 'blue';
  }
  submit(element: HTMLDivElement) {
    console.log(element.classList);
    this.elemHTMLDiv = element.classList;
  }
  viewChild() {
    const view =  (this.testView.nativeElement as HTMLDivElement).classList;
    alert(view);
  }
  constructor() {
    setTimeout(() => {
      this.buttonDisabled = true;
    }, 3000);

  }

  ngOnInit(): void {
  }



}


