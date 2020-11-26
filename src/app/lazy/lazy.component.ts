import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-lazy",
  templateUrl: "./lazy.component.html",
  styleUrls: ["./lazy.component.css"]
})
export class LazyComponent implements OnInit, OnDestroy, LazyComponent {
  readonly isDisplayedSubject = new BehaviorSubject(false);
  readonly isDisplayed$ = this.isDisplayedSubject.asObservable();

  @Input() name: string;

  constructor() {
    console.log('%c %s','color: blue', `LazyComponent Created`);
  }

  ngOnInit() {
    console.log('%c %s','color: green', `LazyComponent ${this.name} OnInit`);
  }

  ngOnDestroy() {
    console.log('%c %s','color: red', `LazyComponent ${this.name} component OnDestroy`);
  }
}
