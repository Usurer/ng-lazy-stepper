import { Component, OnInit, QueryList, ContentChildren, TemplateRef, AfterViewInit } from "@angular/core";
import { StepComponent } from "../step/step.component";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.css"]
})
export class StepperComponent implements OnInit, AfterViewInit {
  currentStepNumber = 0;
  
  constructor() {}

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    // prevents ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked error
    setTimeout(() =>
      this.showStep()
    );    
  }

  @ContentChildren(StepComponent) steps: QueryList<StepComponent>;

  get currentStepTemplate(): TemplateRef<unknown> {
    return this.steps?.toArray()[this.currentStepNumber]?.template;
  }

  onBackwardClick() {
    this.hideStep();
    this.currentStepNumber = this.currentStepNumber > 0
      ? this.currentStepNumber - 1
      : 0;
    this.showStep();
  }

  onForwardClick() {
    this.hideStep();
    
    this.currentStepNumber = this.currentStepNumber === this.steps.length - 1
      ? this.currentStepNumber
      : this.currentStepNumber + 1;

    this.showStep();
  }

  isForwardDisabled(): boolean {
    return this.currentStepNumber === this.steps.length - 1;
  }

  isBackwardDisabled(): boolean {
    return this.currentStepNumber === 0;
  }

  hideStep() {
    this.steps?.toArray()[this.currentStepNumber].setVisibility(false);
    // These should be uncommented for a working lazy loading version
    // this.steps?.toArray()[this.currentStepNumber].lazyLoadStepContent.isDisplayedSubject.next(false);
  }

  showStep() {
    this.steps?.toArray()[this.currentStepNumber].setVisibility(true);
    // this.steps?.toArray()[this.currentStepNumber].lazyLoadStepContent.isDisplayedSubject.next(true);
  }
}
