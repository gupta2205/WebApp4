import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string = '';

  constructor() { }

  resetUser() {
    this.userName ="";
  }
  
  userUpdate() {
    return (this.userName === "") ? true : false;
  }


  ngOnInit() {
  }

}
