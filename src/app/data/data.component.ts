import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, OnDestroy {

  @Input() name: string;

  constructor() {
    console.log(`Data ${this.name} component Created`);
  }

  ngOnInit() {
    console.log(`Data ${this.name} component OnInit`);
  }

  ngOnDestroy() {
    console.log(`Data ${this.name} component OnDestroy`);
  }

}