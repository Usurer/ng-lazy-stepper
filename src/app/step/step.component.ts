import { Component, OnInit, TemplateRef, ViewChild, ContentChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILazy } from '../../common/ILazy';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  readonly isDisplayedSubject = new BehaviorSubject(false);
  readonly isDisplayed$ = this.isDisplayedSubject.asObservable();

  @ViewChild('contentTemplate', { static: true }) template: TemplateRef<unknown>;
  @ContentChild('lazy') lazyLoadStepContent: ILazy;

  constructor() { }

  ngOnInit() {
  }

  setVisibility(value: boolean) {
    this.isDisplayedSubject.next(value);
  }
}