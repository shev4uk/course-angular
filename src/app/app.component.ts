import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  gender = ['Male', 'Female'];

  user = {
    email: '',
    password: '',
    gender: ''
  }

  name = new FormControl('gdgd', [Validators.required, Validators.email
  ]);

  getValue() {
    console.log(this.title);
  }

  onSubmit() {
    console.log(this.user);
  }
}
