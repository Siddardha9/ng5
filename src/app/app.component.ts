import { Component } from '@angular/core'; // All the imports

// Component Decorater for structure
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // for html template
  styleUrls: ['./app.component.scss'] // Scss extesnsion
})

// logic
export class AppComponent {
  title = 'app';
}
