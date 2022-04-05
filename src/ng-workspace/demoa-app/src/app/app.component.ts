import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location = 'chennai';
  number = 10;
  onBoxValueChange(event :Event) {
    console.log("app component:" + (event.target as HTMLInputElement).value);
  }
  print(){
    var input = (<HTMLInputElement>document.getElementById('text')).value;
  console.log(input);
  alert('data saved sucessfully');
  }
  reset(){
    var input = (<HTMLInputElement>document.getElementById('text')).value = '';

  }
}
