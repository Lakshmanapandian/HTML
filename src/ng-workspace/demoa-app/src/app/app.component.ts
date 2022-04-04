import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location = 'chennai';
  onBoxValueChange(event :Event) {
    console.log("app component:" + (event.target as HTMLInputElement).value);
  }
}
