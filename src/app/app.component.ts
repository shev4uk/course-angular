import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isChecked = true;
  colorRed = true;
  colorCode = 2;

  inputText;
  inputName;

  listUser = [{
    id: 1,
    name: 'bob',
    position: 'junior'
  }, {
    id: 2,
    name: 'alice',
    position: 'middle'
  }, {
    id: 3,
    name: 'john',
    position: 'senior'
  }];
  

  onCheck() {
    this.colorRed = !this.colorRed;
  }

  deleteUserFromArray(id) {
    console.log(id);
    this.listUser.splice(id, 1);
  }
}
