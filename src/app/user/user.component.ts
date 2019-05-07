import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() userDetail;
  @Input() userId;
  @Output() deleteUserId = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  deleteUser(id) {
    this.deleteUserId.emit(id);
  }
}
