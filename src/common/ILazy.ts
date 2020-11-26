import { Subject } from 'rxjs';

export interface ILazy {
  readonly isDisplayedSubject: Subject<boolean>;
}
