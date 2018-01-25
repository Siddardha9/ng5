import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// this has been given got through the -- routing in command line
const routes: Routes = [ // this is the place where we set path
  {
    path: '', // object with the first proerty path and it is home path
    component: HomeComponent
  },
  {
    path: 'about/:id', // id is called route parameter we can create multiple route parameters
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
