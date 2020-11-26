import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LazyComponent } from './lazy/lazy.component';
import { StepComponent } from './step/step.component';
import { StepperComponent } from './stepper/stepper.component';
import { DataComponent } from './data/data.component';
import { EagerComponent } from './eager/eager.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LazyComponent, StepComponent, StepperComponent, DataComponent, EagerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
