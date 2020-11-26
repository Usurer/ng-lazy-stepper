import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.css']
})
export class EagerComponent implements OnInit {

  @Input() name: string;

  constructor() {
    console.log(`EagerComponent ${this.name} created`);
  }

  ngOnInit() {
    console.log(`EagerComponent ${this.name} initialized`);
  }

}