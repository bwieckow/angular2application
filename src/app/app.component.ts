import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bartek Wieckowski!';
  today = new Date();

  closeAlert(alert) {
    alert.splice();
  }
}
