import { Component, OnInit } from '@angular/core';
import { Un } from './app.data';
import { User } from './app.user';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isTrue: boolean;
  users = Un;
  Expand(): any {
    this.isTrue = false;
  }
  Collapse(): any {
    this.isTrue = true;
  }
}
