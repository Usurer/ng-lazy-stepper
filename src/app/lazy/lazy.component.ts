import { Component, OnInit, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-lazy",
  templateUrl: "./lazy.component.html",
  styleUrls: ["./lazy.component.css"]
})
export class LazyComponent implements OnInit, LazyComponent {
  readonly isDisplayedSubject = new BehaviorSubject(false);
  readonly isDisplayed$ = this.isDisplayedSubject.asObservable();

  @Input() name: string;

  constructor() {
    console.log(`LazyComponent ${this.name} created`);
  }

  ngOnInit() {
    console.log(`LazyComponent ${this.name} initialized`);
  }
}
