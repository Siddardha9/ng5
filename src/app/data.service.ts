import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']); // this is where will set the default value
  // for the goals array
  goal = this.goals.asObservable(); // another property
  constructor() { }

  changeGoal(goal) { // custom method accessble from other component
// before we use this we need to import it into the app module
    this.goals.next(goal);
  }
}
