import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, OnDestroy {

  @Input() name: string;

  constructor() {
    console.log('%c %s','color: blue', `Data component Created`);
  }

  ngOnInit() {
    console.log('%c %s','color: green', `Data ${this.name} component OnInit`);
  }

  ngOnDestroy() {
    console.log('%c %s','color: red', `Data ${this.name} component OnDestroy`);
  }

}