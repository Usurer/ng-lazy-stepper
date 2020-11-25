import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit, LazyComponent {

  // Set this to false for a working lazy loading version
  readonly isDisplayedSubject = new BehaviorSubject(true);
  readonly isDisplayed$ = this.isDisplayedSubject.asObservable();

  @Input() name: string;

  constructor() {
    console.log(`LazyComponent ${this.name} created`);
  }

  ngOnInit() {
    console.log(`LazyComponent ${this.name} initialized`);
  }

}