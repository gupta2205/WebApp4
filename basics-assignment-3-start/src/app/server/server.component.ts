import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  toggle = true;
  logs = [];
  
  onClick() {
  this.toggle = !this.toggle;
  this.logs.push(new Date());
  }

  ngOnInit() {
  }

}
