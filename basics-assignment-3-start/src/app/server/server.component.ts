import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  toggle = true;
  clicks=0;
  constructor() { }

  onToggle() {
  this.toggle = this.toggle ? false : true;
  }

  count() {
    this.clicks++;
  }

  getColor() {
    return this.clicks>5 ? 'blue' : 'white'; 
  }

  ngOnInit() {
  }

}
