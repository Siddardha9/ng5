import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'; // import a number of animation funcs
import { DataService } from '../data.service';
@Component({ // the area which we specify the animation will reside in component in property animations
  selector: 'app-home',
  templateUrl: './home.component.html', // we can use template for inserting multi line html using the back link(left side of no 1)
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger ('goals', [ // in parathsis a number of animation specific functions will reside
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}), // query is another animation specific function where we specify in the
        // Argument when some thing entersthe dom style opactity is zero *some times animations will fail if we dont give option = true

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([// keyframes frames will allow style functions
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}), // stragger is a function that allows you too take elemnts and dealy when elemnt display
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([// keyframes frames will allow style functions
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))
        ]), {optional: true})
      ]) // the first transaction will get activated when any state goes any state
    ]) // the first argument accepts the name of the anmation
  ]
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  itemCount: number;
  // tslint:disable-next-line:no-inferrable-types
  btnText: string = 'Add an item';

  // tslint:disable-next-line:no-inferrable-types
  goalText: string = 'My First life goal';
  goals = []; // Add values for goals array
  constructor(private _data: DataService) { }// Dependency injection method

  ngOnInit() {// this is a life cycle hook will run when a component is loaded
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = ''; // clear out the input after it is submitted
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) { // define remove item method
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }
}
/* example for template html
 <p> this is my home page</p>

We can include the css in the styleUrls by
using styles and kepping the brackets
styles:[`p{ font-weight : bold}`]
*/
