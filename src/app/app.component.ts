import { Component, OnInit } from '@angular/core';
import { User } from './app.user';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  inputText: string = 'First one';
  U1: User = {
    name: 'Satyansh',
    id: 2,
    family_name: 'Mishra',
  };
}
