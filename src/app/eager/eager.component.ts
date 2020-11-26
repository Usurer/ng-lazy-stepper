import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.css']
})
export class EagerComponent implements OnInit, OnDestroy {

  @Input() name: string;

  constructor() {
    console.log('%c %s','color: blue', `EagerComponent created`);
  }

  ngOnInit() {
    console.log('%c %s','color: green', `EagerComponent ${this.name} OnInit`);
  }

  ngOnDestroy() {
    console.log('%c %s','color: red', `EagerComponent ${this.name} component OnDestroy`);
  }

}