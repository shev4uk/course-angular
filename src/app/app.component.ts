import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  head = 'my service';

  user = 'Yurii';

  users = [
    {
      name: 'alice',
      age: 32
    }, 
    {
      name: 'bob',
      age: 27
    },
    {
      name: 'john',
      age: 21
    }
  ];

  ageUser() {
    return 26;
  }
}
