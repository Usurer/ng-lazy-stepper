import { Component, OnInit, TemplateRef, ViewChild, ContentChild } from '@angular/core';
import { Subject } from 'rxjs';

export interface LazyComponent {
  readonly isDisplayedSubject: Subject<boolean>;
}

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('contentTemplate', { static: true }) template: TemplateRef<unknown>;
  @ContentChild('lazyComponent') lazyLoadStepContent: LazyComponent;
}