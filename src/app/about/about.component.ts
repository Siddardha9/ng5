import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // this will give access to the route paramaters
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any;
  constructor(private route: ActivatedRoute, private router: Router , private _data: DataService)  {
    this.route.params.subscribe(res => console.log(res.id)); // this will get called when the component is loaded the id is defined in the
    // routing module
  } // this is an instance of activated route we do that using dependencey injection

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }
  sendMeHome() {
    this.router.navigate(['']); // '' is refferning to the path in app:routing module
  }
}
